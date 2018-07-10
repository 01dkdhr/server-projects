<template>
    <div id="app">
        <navigator></navigator>

        <keep-alive>
            <router-view/>
        </keep-alive>
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

    .clear-pd {
        padding: 0 5px;
    }

    .w-100 {
        width: 100%;
    }
}
</style>
