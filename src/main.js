import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    funds: 10
  },
  mutations: {
    increaseFunds(state, by) {
      state.funds += by;
    },
    decreaseFunds(state, by) {
      state.funds -= by;
    }
  }
});

Vue.use(VueRouter);
const router = new VueRouter({routes: routes});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});
