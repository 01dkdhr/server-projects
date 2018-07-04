import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import router from '@router/index.js'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})