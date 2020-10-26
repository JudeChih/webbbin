require('./bootstrap');
window.Vue = require('vue');
Vue.config.productionTip = false;

import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
    { path: '/index', name: 'index', component: Vue.component( 'index', require( './pages/Index.vue' ).default)},
    { path: '/detail', name: 'detail', component: Vue.component( 'detail', require( './pages/Detail.vue' ).default)},
    { path: '/demo', name: 'demo', component: Vue.component( 'demo', require( './pages/Demo.vue' ).default)}
  ]
    
const router = new VueRouter({
    routes 
})

try {
    window.$ = window.jQuery = require('jquery');

    require('foundation-sites');
} catch (e) {}

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

// window.axios = require('axios');

// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.head.querySelector('meta[name="csrf-token"]');

// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

import isotope from 'vueisotope'
Vue.component('isotope', isotope);
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(infiniteScroll);
import Notifications from 'vue-notification'
Vue.use(Notifications);

new Vue({
    router
}).$mount('#app');