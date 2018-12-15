import _ from 'lodash';

const timeFilterArray = [
  [" 09:1", " 09:2", " 09:3"], [" 09:4"], [" 09:5"],
  [" 10:0"], [" 10:1"], [" 10:2"], [" 10:3"], [" 10:4"], [" 10:5"],
  [" 11:0"], [" 11:1"], [" 11:2", " 11:30"],
  [" 13:0"], [" 13:1"], [" 13:2"], [" 13:3"], [" 13:4"], [" 13:5"],
  [" 14:0"], [" 14:1"], [" 14:2"], [" 14:3"], [" 14:4"], [" 14:5", " 15:0"]
];

for (let i = 0; i < timeFilterArray.length; ++i) {
  timeFilterArray[i] = encodeURIComponent(JSON.stringify(timeFilterArray[i]));
}

const state = {
  date: "",
  ts_code: "002504.SZ",
  dataArr: [],
  time_filter: timeFilterArray[0]
};

const mutations = {
  updateState(state, obj) {
    Object.keys(obj).forEach((key) => {
      if (key in state) {
        state[key] = obj[key];
      }
    })
  }
}

const actions = {
  getDatas({ commit, state }) {
    if (!state.ts_code || !state.date) {
      return;
    }

    axios.get('/api/stock/stk-tick', {
      params: {
        ts_code: state.ts_code,
        date: state.date,
        time_filter: state.time_filter
      }
    })
      .then((response) => {
        if (!response.data.result || !response.data.result.length) {
          return;
        }
        const arr = response.data.result.split('\r\n');
        const dataArr = _.cloneDeep(state.dataArr);

        arr.forEach((item) => {
          if (!item || !item.split) {
            return;
          }
          const obj = item.split(',');
          dataArr.push({
            time: obj[2].split(' ')[1],
            price: parseFloat(obj[3]).toFixed(2),
            count: obj[4],
            sum: obj[5],
            amount: obj[6],
            direction: obj[7],
            bp1: parseFloat(obj[8]).toFixed(2),
            bp2: parseFloat(obj[9]).toFixed(2),
            bp3: parseFloat(obj[10]).toFixed(2),
            bp4: parseFloat(obj[11]).toFixed(2),
            bp5: parseFloat(obj[12]).toFixed(2),
            sp1: parseFloat(obj[13]).toFixed(2),
            sp2: parseFloat(obj[14]).toFixed(2),
            sp3: parseFloat(obj[15]).toFixed(2),
            sp4: parseFloat(obj[16]).toFixed(2),
            sp5: parseFloat(obj[17]).toFixed(2),
            bq1: parseInt(obj[18]),
            bq2: parseInt(obj[19]),
            bq3: parseInt(obj[20]),
            bq4: parseInt(obj[21]),
            bq5: parseInt(obj[22]),
            sq1: parseInt(obj[23]),
            sq2: parseInt(obj[24]),
            sq3: parseInt(obj[25]),
            sq4: parseInt(obj[26]),
            sq5: parseInt(obj[27])
          });
        });
        commit('updateState', { dataArr });
      })
      .catch((error) => {
        console.log(`getDatas err: ${error}`);
      });
  },
  getTradeDate({ dispatch, commit, state }, { date, type }) {
    axios.get('/api/stock/trade-date', {
      params: {
        date,
        type
      }
    })
      .then((response) => {
        commit('updateState', { date: response.data.result, dataArr: [], time_filter: timeFilterArray[0] });
        dispatch('getDatas');
      })
      .catch((error) => {
        console.log(`getTradeDate err: ${error}`);
      });
  },
  loadMore({ dispatch, state }) {
    const index = timeFilterArray.indexOf(state.time_filter);
    if (index == timeFilterArray.length - 1) {
      return;
    }

    state.time_filter = timeFilterArray[index + 1];
    dispatch('getDatas');
  },
  preTradeDay({ dispatch, state }) {
    if (!state.date) {
      return;
    }
    dispatch('getTradeDate', { date: state.date, type: "pre" });
  },
  nextTradeDay({ dispatch, state }) {
    if (!state.date) {
      return;
    }
    dispatch('getTradeDate', { date: state.date, type: "next" });
  },
  setTimeFilter({ commit, dispatch }, { index }) {
    commit('updateState', { time_filter: timeFilterArray[index], dataArr: [] });
    dispatch('getDatas');
  }
}

export default {
  state,
  mutations,
  actions
};