<template>
    <div id="app">
        daily stock
    </div>
</template>

<script>
import localConfig from '@src/../local-config.json';
import utils from '@src/utils.js';
export default {
    name: 'app',
    data () {
        return {
            info: null,
            dailyData: []    
        }
    },
    created() {
        // 测试数据
        // const testData = require('@src/testdata.js');
        // this.initData(JSON.parse(testData["daily-stock"]));

        const params = utils.getParamMap(location.href);
        if (params.symbol) {
            axios.get(`${localConfig['api-host']}stock/daily-stock?symbol=${params.symbol}`)
            .then((response) => {
                this.initData(JSON.parse(response.data.result));
            })
            .catch((error) => {
                console.log(error);
                alert('get stock list err');
            });
        } else {
            alert('symbol is empty');   
        }
    },
    methods: {
        initData(data) {
            this.info = data.info;
            data.data.forEach((item) => {
                const time = new Date(parseInt(item.eob) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
                item.date = time.substring(0, time.indexOf(' '));
                
                this.dailyData.push(item);   
            });
            this.dailyData.sort((a, b) => {
                return b.eob - a.eob;
            });

            console.log(this.info);
            console.log(this.dailyData);
        }
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
