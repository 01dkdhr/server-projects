<template>
  <div id="stk-tick">
    <div class="toolbar">
      <div class="date-container">
        <div class="button">前一天</div>
        <input class="date-input" type="text" v-model="state.date"/>
        <div class="button">后一天</div>
      </div>
      <div class="stock-container">
        <div>ts_code:</div>
        <input class="stock-input" type="text" v-model="state.ts_code"/>
      </div>
      <div class="submit-container">
        <div class="button" @click="submit">确定</div>
      </div>
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
    this.$store.dispatch('getTradeDate', {});
  },
  methods: {
    submit() {
      this.$store.dispatch('getDatas');
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

  .button {
    cursor: pointer;
    user-select: none; 
    
    &:hover {
      color: rgb(15, 167, 147);
    }
  }
}
</style>


