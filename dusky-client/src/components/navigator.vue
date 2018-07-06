<template>
    <div id="navigator">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <router-link to="home" tag="span" class="navbar-brand router-link">
                    Welcome To Dusky Home!
                </router-link>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav ml-auto">
                        <router-link to="home" tag="li" 
                            class="nav-link router-link"
                            :class="{'active': curRouterName == 'home'}">
                            Home
                        </router-link>

                        <router-link to="tools" tag="li" 
                            class="nav-link router-link"
                            :class="{'active': curRouterName == 'tools'}">
                            Tools
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


