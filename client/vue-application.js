
/*const Register = window.httpVueLoader('./components/Register.vue')
const Creation = window.httpVueLoader('./Components/Creation.vue')
const recettes = window.httpVueLoader('./Components/browse.vue')
const Home = window.httpVueLoader('./Components/Home.vue')
const Inscription = window.httpVueLoader('./Components/Inscription.vue')
const Connexion = window.httpVueLoader('./Components/Connexion.vue')
const Acceuil = window.httpVueLoader('./Components/acc.vue')
const RecetteDis = window.httpVueLoader('./Components/Recette_display.vue')*/
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