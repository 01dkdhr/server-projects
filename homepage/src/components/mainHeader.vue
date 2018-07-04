<template>
    <div id="main-header">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <a class="navbar-brand" href="#">Welcome To Dusky Home!</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav m-auto">
                        <router-link to="home" tag="li" class="nav-link active">
                            Home
                        </router-link>

                        <router-link to="tools" tag="li" class="nav-link">
                            Tools
                        </router-link>

                        <router-link to="logs" tag="li" class="nav-link">
                            Logs
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

        };
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="sass" rel="stylesheet/scss" scoped>

</style>


