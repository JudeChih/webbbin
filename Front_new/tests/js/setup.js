require('jsdom-global')();
global.expect = require('expect')
// global.axios = require('axios');
// global.Vue = require('vue');
// global.bus = new Vue();
window.Date = Date; // temporary bug fix, should be removed after vue-test-utils fixes #936
