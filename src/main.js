import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import VueAlfred from './VueAlfred'
import AsyncComputed from 'vue-async-computed'

Vue.use(VueRouter)
const router = new VueRouter({
    mode: 'history',
    routes
})

Vue.use(new VueAlfred(), {
    baseUrl: 'http://maison.bartfeenstra.com/api',
})

Vue.use(AsyncComputed)

new Vue({
    el: '#app',
    router
})
