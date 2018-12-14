const timeFilterArray = [
  [" 09:1", " 09:2", " 09:3"], [" 09:3"], [" 09:4"], [" 09:5"],
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
  ts_code: "",
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
      console.log('getDatas err: param err');
      return;
    }

    axios.get('https://www.dusky.xyz/api/stock/stk-tick', {
      params: {
        ts_code: state.ts_code,
        date: state.date,
        time_filter: state.time_filter
      }
    })
      .then((response) => {
        const arr = response.data.result.split('\r\n');
        const dataArr = [];

        arr.forEach((item) => {
          if (!item || !item.split) {
            return;
          }
          const obj = item.split(',');
          dataArr.push({
            time: obj[2].split(' ')[1],
            price: obj[3],
            count: obj[4],
            sum: obj[5],
            amount: obj[6],
            direction: obj[7],
            bp1: obj[8],
            bp2: obj[9],
            ob3: obj[10],
            bp4: obj[11],
            bp5: obj[12],
            sp1: obj[13],
            sp2: obj[14],
            sp3: obj[15],
            sp4: obj[16],
            sp5: obj[17],
            bq1: obj[18],
            bq2: obj[19],
            bq3: obj[20],
            bq4: obj[21],
            bq5: obj[22],
            sq1: obj[23],
            sq2: obj[24],
            sq3: obj[25],
            sq4: obj[26],
            sq5: obj[27]
          });
        });
        commit('updateState', { dataArr });
      })
      .catch((error) => {
        console.log(`getDatas err: ${error}`);
      });
  },
  getTradeDate({ commit, state }, { date, type }) {
    axios.get('https://www.dusky.xyz/api/stock/trade-date', {
      params: {
        date,
        type
      }
    })
      .then((response) => {
        commit('updateState', { date: response.data.result });
      })
      .catch((error) => {
        console.log(`getTradeDate err: ${error}`);
      });
  }
}

export default {
  state,
  mutations,
  actions
};