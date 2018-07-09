<template>
    <div id="navigator">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <router-link to="home" tag="a" class="navbar-brand">
                    Welcome To Dusky Home!
                </router-link>

                <button class="navbar-toggler"
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarResponsive" 
                    aria-controls="navbarResponsive" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbarResponsive" class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <router-link to="home" tag="li"
                            class="nav-item"
                            :class="{'active': curRouterName == 'home'}">

                            <a class="nav-link" href="javascript:void(0);">Home</a>
                        </router-link>

                        <router-link to="tools" tag="li"
                            class="nav-item"
                            :class="{'active': curRouterName == 'tools'}">
                            
                            <a class="nav-link" href="javascript:void(0);">Tools</a>
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


