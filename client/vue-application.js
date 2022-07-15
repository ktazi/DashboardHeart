
const test = window.httpVueLoader('./Components/dashboard.vue')

const routes = [
    {path: '/', component: test},

]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    methods: {}
})