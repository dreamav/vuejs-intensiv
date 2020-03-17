import Vue from 'vue';
import App from './App.vue';

import {store} from './store';
import {router} from './routes';

import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.http.options.root = 'http://todobox.loc/'

new Vue({
  el: '#app',
  store,
  router: router,
  render: h => h(App)
})
