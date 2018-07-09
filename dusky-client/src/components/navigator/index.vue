<template>
    <div id="navigator">
        <nav class="navbar navbar-inverse">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" 
                        data-toggle="collapse" data-target="#navbar" 
                        aria-controls="navbar" aria-expanded="false" 
                        aria-label="Toggle navigation">

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
                <div id="navbar" class="collapse navbar-collapse in">
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


