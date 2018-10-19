<template>
    <div id="app">
        <div class="stock-title">
            <span>名称</span>
            <span>代码</span>
            <span>交易所</span>
        </div>
        <div v-for="(stock, index) in stocks" :key="index" class="stock-list">
            <a target="_blank" :href="`/daily_stock.html?symbol=${encodeURIComponent(stock.symbol)}`" class="name">{{stock.sec_name}}</a>
            <span>{{stock.symbol}}</span>
            <span>{{stock.exchange}}</span>
        </div>
    </div>
</template>

<script>
import localConfig from '@src/../local-config.json';
export default {
    name: 'app',
    data () {
        return {
            stocks: []    
        }
    },
    created() {
        // 测试数据
        // const testData = require('@src/testdata.js');
        // this.stocks = JSON.parse(testData["stock-list"]);

        axios.get(`${localConfig['api-host']}stock/stock-list`)
        .then((response) => {
            this.stocks = JSON.parse(response.data.result);
        })
        .catch((error) => {
            console.log(error);
            alert('get stock list err');
        })
    }
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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

h1, h2 {
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
