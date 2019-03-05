<template>
  <div id="app"></div>
</template>

<script>
import localConfig from "@src/../local-config.json";
import RequestService from "@src/assets/js/RequestService.js";
export default {
  name: "app",
  data() {
    return {
      tmp: ""
    };
  },
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const result = await RequestService.post(
        `${localConfig["api-host"]}tushare`,
        {
          api_name: "dividend",
          params: {
            ts_code: "600000.SH",
            start_date: "20180101",
            end_date: "20180730"
          }
        }
      );

      console.log(result);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;

  .stock-title {
    position: fixed;
    padding-left: 80px;
    top: 0;
    background-color: #6fe6c9;
    padding-top: 10px;
    width: 100%;

    span {
      display: -webkit-inline-box;
      margin: 5px 0;
      width: 200px;
    }
  }

  .stock-list {
    margin-left: 80px;
    span {
      display: -webkit-inline-box;
      margin: 5px 0;
      width: 200px;

      &.name:hover {
        text-decoration: underline;
        cursor: default;
      }
    }
  }
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}
</style>
