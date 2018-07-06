<template>
    <div id="navigator">
        <nav role="navigation" class="navbar navbar-default">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#menu">
                    <span class="sr-only">展开导航</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link to="home" tag="a" class="navbar-brand">
                    Welcome To Dusky Home!
                </router-link>
            </div>
            <div class="collapse navbar-collapse" id="menu">
                <ul class="nav navbar-nav">
                    <router-link to="home" tag="li"
                        :class="{'active': curRouterName == 'home'}">
                        <a href="javascript:void(0);">Home</a>
                    </router-link>

                    <router-link to="tools" tag="li"
                        :class="{'active': curRouterName == 'tools'}">
                        <a href="javascript:void(0);">Tools</a>
                    </router-link>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            curRouterName: 'home'    
        };
    },
    computed: {

    },
    methods: {
        
    },
    watch: {
        ['$route']() {
            this.curRouterName = this.$router.currentRoute.name;
        }
    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>


