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
              <span :class="{ red: item.bp1 == item.price }">{{item.bp1}}</span> / {{item.bq1}}</br>
              <span :class="{ red: item.bp2 == item.price }">{{item.bp2}}</span> / {{item.bq2}}</br>
              <span :class="{ red: item.bp3 == item.price }">{{item.bp3}}</span> / {{item.bq3}}</br>
              <span :class="{ red: item.bp4 == item.price }">{{item.bp4}}</span> / {{item.bq4}}</br>
              <span :class="{ red: item.bp5 == item.price }">{{item.bp5}}</span> / {{item.bq5}}</td>
            <td>
              <span :class="{ red: item.sp1 == item.price }">{{item.sp1}}</span> / {{item.sq5}}</br>
              <span :class="{ red: item.sp2 == item.price }">{{item.sp2}}</span> / {{item.sq4}}</br>
              <span :class="{ red: item.sp3 == item.price }">{{item.sp3}}</span> / {{item.sq3}}</br>
              <span :class="{ red: item.sp4 == item.price }">{{item.sp4}}</span> / {{item.sq2}}</br>
              <span :class="{ red: item.sp5 == item.price }">{{item.sp5}}</span> / {{item.sq1}}</td>
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


