<template>
    <div id="app" class="container">
        <navigator></navigator>
        <router-view/>
    </div>
</template>

<script>
import navigator from '@components/navigator.vue';
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
