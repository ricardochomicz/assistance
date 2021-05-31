/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue').default;
import Vue from 'vue';
import router from './routes'
import store from './store'
import VueTheMask from 'vue-the-mask'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import Select2 from 'v-select2-component';
import Vuelidate from 'vuelidate'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import VTooltip from 'v-tooltip'
import {
    BootstrapVue
} from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import moment from 'moment'


//Import v-from
import {
    Form
} from 'vform'
window.Form = Form;

Vue.use(VueTheMask)
Vue.use(VueToast)
Vue.use(Vuelidate)
Vue.use(VTooltip)
Vue.use(BootstrapVue)



/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app', require('./components/App.vue').default);
Vue.component('Select2', Select2);
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('login', require('./components/auth/Login.vue'))
Vue.component('register', require('./components/auth/Register.vue'))
Vue.component('adminlte', require('./components/bootstrap/Adminlte.vue').default)
Vue.component('preloader', require('./components/Preloader.vue').default)
Vue.component('preloader-card', require('./components/PreloaderCard.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('formatDate', function (value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
})

Vue.filter('formatPrice', function (value) {
    let val = (value / 1).toFixed(2).replace(".", ",");
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
})


const app = new Vue({
    el: '#app',
    router,
    store
});

// this part is not necessary, you may adapt as required
// let isLoggedIn = localStorage.getItem('isLoggedIn') ? true : false
// this.setIsLoggedIn(isLoggedIn)

axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// this is the actual part you need, here we check on each call
// if we get error 401 which is unauthenticated we redirect to login. That's it
axios.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.status === 401) {
            this.$router.push({
                name: 'login'
            })
            localStorage.removeItem('token')
            this.setIsLoggedIn(false)
        }

        return Promise.reject(error)
    }
)
