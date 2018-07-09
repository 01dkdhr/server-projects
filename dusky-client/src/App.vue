<template>
    <div id="app">
        <navigator></navigator>
        <router-view/>
    </div>
</template>

<script>
import navigator from '@components/navigator/index.vue';
export default {
    name: 'App',
    components: {
        navigator
    },
    data() {
        return {};
    }
}
</script>

<style lang="scss">
#app {
    // reset CSS
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
