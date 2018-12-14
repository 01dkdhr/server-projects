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
  timeFilter: timeFilterArray[0]  
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
    axios.get('/api/stock/stk-tick', {
      params: {
        ts_code: state.ts_code,
        date: state.date,
        timeFilter: state.timeFilter
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(`get /api/stock/stk-tick err: ${error}`);
    });
  }
}

export default {
  state,
  mutations,
  actions
};