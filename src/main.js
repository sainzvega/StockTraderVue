import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import {routes} from './routes';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    funds: 10.000,
    stocks: [
      {name: 'BMW', price: 100},
      {name: 'Google', price: 100},
      {name: 'Apple', price: 100},
      {name: 'United', price: 25}
      ],
  },
  mutations: {
    randomizeStockPrice(state) {
      state.stocks.forEach((stock) => {
        let upOrDown = Math.random() * 100 > 50 ? -1 : 1;
        let by = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        stock.price += (upOrDown * by);
      });
    },
    increaseFunds(state, by) {
      state.funds += by;
    },
    decreaseFunds(state, by) {
      state.funds -= by;
    }
  },
  actions : {
    randomizeStockPrice(context) {
      context.commit('randomizeStockPrice');
    },
    increaseFunds(context) {
      context.commit('increaseFunds');
    },
    decreaseFunds(context) {
      context.commit('decreaseFunds');
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
