<template>
  <div id="stk-tick">
    <div class="toolbar">
      <div class="date-container">
        <div class="button">前一天</div>
        <input class="date-input" type="text" v-model="state.date">
        <div class="button">后一天</div>
      </div>
      <div class="stock-container">
        <div>ts_code:</div>
        <input class="stock-input" type="text" v-model="state.ts_code">
      </div>
      <div class="submit-container">
        <div class="button" @click="submit">确定</div>
      </div>
    </div>
    <div class="stk-container">
      <table>
        <tbody>
          <tr v-for="(item, index) in state.dataArr" :key="index">
            <td> {{item.time}} </td>
            <td> {{item.price}} </td>
            <td> {{item.direction}} </td>
            <td> {{item.count}} </td>
            <td> {{item.bp1}} / {{item.bq1}}</br>{{item.bp2}} / {{item.bq2}}</br>{{item.bp3}} / {{item.bq3}}</br>{{item.bp4}} / {{item.bq4}}</br>{{item.bp5}} / {{item.bq5}}</td>
            <td> {{item.sp5}} / {{item.sq5}}</br>{{item.sp4}} / {{item.sq4}}</br>{{item.sp3}} / {{item.sq3}}</br>{{item.sp2}} / {{item.sq2}}</br>{{item.sp1}} / {{item.sq1}} </td>
          </tr>
        </tbody>
      </table>
      <div class="button" v-show="state.dataArr.length" @click="loadMore">加载更多</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
      this.$store.dispatch("getDatas");
    },
    loadMore() {
      this.$store.dispatch("loadMore");
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
  }

  & .stk-container {
    & table {
      th, td {
        border-right:1px solid #888;
				border-bottom:1px solid #888;
				padding:5px 15px;
      }
    }
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


