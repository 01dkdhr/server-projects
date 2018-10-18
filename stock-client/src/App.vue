<template>
    <div id="app">

    </div>
</template>

<script>
import localConfig from 'src$/../local-config.json';
export default {
    name: 'app',
    data () {
        return {
            stocks: []    
        }
    },
    created() {
        axios.get(`${localConfig['api-host']}stock/stocl-list`)
        .then((response) => {
            console.log(response);
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
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
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
