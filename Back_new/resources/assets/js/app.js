require('./bootstrap');
window.Vue = require('vue');
Vue.config.devtools = true;
Vue.config.productionTip = false;
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    // { path: '/index', name: 'index', component: Vue.component('index', require('./pages/Index.vue').default) },
    // { path: '/project', name: 'project', component: Vue.component('project', require('./pages/Project.vue').default) },
    // { path: '/logo', name: 'logo', component: Vue.component('logo', require('./pages/Logo.vue').default) },
    // { path: '/transaction', name: 'transaction', component: Vue.component('transaction', require('./pages/Transaction.vue').default) },
    // { path: '/user', name: 'user', component: Vue.component('user', require('./pages/User.vue').default) },
    { path: '/allinone', name: 'allinone', component: Vue.component('allinone', require('./pages/Allinone.vue').default) }
]

const router = new VueRouter({
    routes
})

try {
    window.$ = window.jQuery = require('jquery');

    require('foundation-sites');
} catch (e) { }

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

// let token = document.head.querySelector('meta[name="csrf-token"]');

// if (token) {
//     window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
// } else {
//     console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
// }

import isotope from 'vueisotope'
Vue.component('isotope', isotope);
var infiniteScroll = require('vue-infinite-scroll');
Vue.use(infiniteScroll);
import Notifications from 'vue-notification'
Vue.use(Notifications);
import Paginate from "vuejs-paginate";
Vue.component("paginate", Paginate);
import VTooltip from "v-tooltip";
Vue.use(VTooltip);


new Vue({
    el:'#app',
    router
});