<template>
  <div id="stk-tick">
    <div class="toolbar">
      <div class="date-container">
        <div class="button" @click="preTradeDay">前一天</div>
        <input class="date-input" type="text" v-model="state.date">
        <div class="button" @click="nextTradeDay">后一天</div>
      </div>
      <div class="stock-container">
        <div>ts_code:</div>
        <input class="stock-input" type="text" v-model="state.ts_code">
      </div>
      <div class="submit-container">
        <div class="button" @click="submit">确定</div>
      </div>
      <div class="select-container">
        <span>时间选择: </span>
        <select v-model="selectTime">
          <option v-for="(item, index) in timeArr" :value="item" :key="index">{{item}}</option>
        </select>
      </div>
    </div>
    <div class="stk-container">
      <table>
        <tbody>
          <tr v-for="(item, index) in state.dataArr" :key="index">
            <td> {{item.time}} </td>
            <td> {{item.price}} </td>
            <td :class="{ red: item.direction == 'B', green: item.direction == 'S' }"> {{item.direction}} </td>
            <td> {{item.amount}} </td>
            <td>
              <span class="col-1">{{item.bp1}} /</span><span class="col-2">{{item.bq1}}</span> | <span class="col-3" :class="{red:item.bq1Change>0,green:item.bq1Change<0}">{{item.bq1Change==0?'':((item.bq1Change>0?'+':'') + item.bq1Change)}}</span></br>
              <span class="col-1">{{item.bp2}} /</span><span class="col-2">{{item.bq2}}</span> | <span class="col-3" :class="{red:item.bq2Change>0,green:item.bq2Change<0}">{{item.bq2Change==0?'':((item.bq2Change>0?'+':'') + item.bq2Change)}}</span></br>
              <span class="col-1">{{item.bp3}} /</span><span class="col-2">{{item.bq3}}</span> | <span class="col-3" :class="{red:item.bq3Change>0,green:item.bq3Change<0}">{{item.bq3Change==0?'':((item.bq3Change>0?'+':'') + item.bq3Change)}}</span></br>
              <span class="col-1">{{item.bp4}} /</span><span class="col-2">{{item.bq4}}</span> | <span class="col-3" :class="{red:item.bq4Change>0,green:item.bq4Change<0}">{{item.bq4Change==0?'':((item.bq4Change>0?'+':'') + item.bq4Change)}}</span></br>
              <span class="col-1">{{item.bp5}} /</span><span class="col-2">{{item.bq5}}</span> | <span class="col-3" :class="{red:item.bq5Change>0,green:item.bq5Change<0}">{{item.bq5Change==0?'':((item.bq5Change>0?'+':'') + item.bq5Change)}}</span></td>
            <td>
              <span class="col-1">{{item.sp1}} /</span><span class="col-2">{{item.sq1}}</span> | <span class="col-3" :class="{red:item.sq1Change<0,green:item.sq1Change>0}">{{item.sq1Change==0?'':((item.sq1Change>0?'+':'') + item.sq1Change)}}</span></br>
              <span class="col-1">{{item.sp2}} /</span><span class="col-2">{{item.sq2}}</span> | <span class="col-3" :class="{red:item.sq2Change<0,green:item.sq2Change>0}">{{item.sq2Change==0?'':((item.sq2Change>0?'+':'') + item.sq2Change)}}</span></br>
              <span class="col-1">{{item.sp3}} /</span><span class="col-2">{{item.sq3}}</span> | <span class="col-3" :class="{red:item.sq3Change<0,green:item.sq3Change>0}">{{item.sq3Change==0?'':((item.sq3Change>0?'+':'') + item.sq3Change)}}</span></br>
              <span class="col-1">{{item.sp4}} /</span><span class="col-2">{{item.sq4}}</span> | <span class="col-3" :class="{red:item.sq4Change<0,green:item.sq4Change>0}">{{item.sq4Change==0?'':((item.sq4Change>0?'+':'') + item.sq4Change)}}</span></br>
              <span class="col-1">{{item.sp5}} /</span><span class="col-2">{{item.sq5}}</span> | <span class="col-3" :class="{red:item.sq5Change<0,green:item.sq5Change>0}">{{item.sq5Change==0?'':((item.sq5Change>0?'+':'') + item.sq5Change)}}</span></td>
          </tr>
        </tbody>
      </table>
      <div class="button" v-show="state.dataArr.length" @click="loadMore">加载更多</div>
    </div>
    <div class="right-float">
      <div class="button" @click="gotoTop">返回顶部</div>
      <div class="button" @click="gotoBottom">返回底部</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectTime: "",
      timeArr: ["09:15-09:40", "09:40-09:50", "09:50-10:00",
        "10:00-10:10", "10:10-10:20", "10:20-10:30","10:30-10:40","10:40-10:50","10:50-11:00",
        "11:00-11:10", "11:10-11:20", "11:20-11:30",
        "13:00-13:10", "13:10-13:20", "13:20-13:30","13:30-13:40","13:40-13:50","13:50-14:00",
        "14:00-14:10", "14:10-14:20", "14:20-14:30","14:30-14:40","14:40-14:50","14:50-15:00",]
    };
  },
  computed: {
    state() {
      return this.$store.state.stk_tick;
    }
  },
  mounted() {
    this.$store.dispatch("getTradeDate", {});
  },
  methods: {
    submit() {
      this.selectTime = '';
      this.$store.dispatch("getDatas");
    },
    loadMore() {
      this.selectTime = '';
      this.$store.dispatch("loadMore");
    },
    preTradeDay() {
      this.selectTime = '';
      this.$store.dispatch("preTradeDay");
    },
    nextTradeDay() {
      this.selectTime = '';
      this.$store.dispatch("nextTradeDay");
    },
    gotoTop() {
      scrollTo(0,0);
    },
    gotoBottom() {
      scrollTo(0,document.body.scrollHeight );
    }
  },
  watch: {
    selectTime(newValue, oldValue) {
      if (newValue && oldValue !== newValue) {
        this.$store.dispatch('setTimeFilter', { index: this.timeArr.indexOf(this.selectTime) });
      }
    }  
  }
};
</script>

<style lang="scss" scoped>
#stk-tick {
  & .toolbar {
    display: flex;
    flex-direction: row;

    & .date-container {
      flex: 0 0 auto;
      display: flex;
      flex-direction: row;
      line-height: 21px;

      & .date-input {
        width: 80px;
      }

      & * {
        margin: 0 10px;
      }
    }

    .stock-container {
      margin-left: 20px;
      flex: 0 0 auto;
      display: flex;
      line-height: 21px;

      & .stock-input {
        width: 80px;
      }

      & * {
        margin: 0 10px;
      }
    }

    .submit-container {
      margin-left: 20px;
      flex: 0 0 auto;
      line-height: 21px;

      & .button {
        padding: 0 10px;
        color: rgb(123, 86, 224);
        background-color: rgb(189, 213, 245);
      }
    }

    .select-container {
      margin-left: 20px;
    }
  }

  & .stk-container {
    & table {
      th, td {
        border-right:1px solid #888;
				border-bottom:1px solid #888;
				padding:5px 15px;
      }
    }

    .col-1 {
      line-height: 21px;
      display: inline-block;
      text-align: right;
      width: 80px;
    }

    .col-2 {
      line-height: 21px;
      display: inline-block;
      text-align: left;
      margin-left: 8px;
      width: 50px;
    }

    .col-3 {
      line-height: 21px;
      display: inline-block;
      text-align: left;
      width: 50px;
    }

    .red {
      color: red;
    }

    .green {
      color: green;
    }
  }

  & .right-float {
    position: fixed;
    top: 80px;
    right: 30px;
  }

  .button {
    cursor: pointer;
    user-select: none;

    &:hover {
      color: rgb(15, 167, 147);
    }
  }
}
</style>


