<template>
    <div id="app">
        <main-header></main-header>
        <router-view></router-view>
    </div>
</template>

<script>
import mainHeader from '@components/mainHeader.vue';

export default {
    name: "app",
    components: {
        mainHeader
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .nav-link {
        cursor: pointer;
        user-select: none;
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

a {
    color: #42b983;
}
</style>
