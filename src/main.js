import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import VueRouter from 'vue-router';
import {
  routes
} from './routes';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    funds: 10.000,
    stocks: [{
        name: 'BMW',
        price: 100,
        isOwned: false
      }, // not the best...but fuck it
      {
        name: 'Google',
        price: 100,
        isOwned: false
      }, // what are you gonna do?
      {
        name: 'Apple',
        price: 100,
        isOwned: false
      }, // sue me?
      {
        name: 'United',
        price: 25,
        isOwned: false
      } // i aint worth shit. see if i care.
    ],
  },
  getters: {
    ownedStocks: state => {
      return state.stocks.filter(stock => stock.isOwned);
    }
  },
  mutations: {
    randomizeStockPrice(state) {
      state.stocks.forEach((stock) => {
        let upOrDown = Math.random() * 100 > 50 ? -1 : 1;
        let by = Math.floor(Math.random() * (15 - 5 + 1)) + 5;
        stock.price += (upOrDown * by);
      });
    },
    sellStock(state, stockName) {
      let arr = state.stocks,
        index = arr.findIndex((stock) => {
          return stock.name === stockName;
        });

      if (index >= 0)
        arr[index].isOwned = false;
    },
    buyStock(state, stockName) {
      let arr = state.stocks,
        index = arr.findIndex((stock) => {
          return stock.name === stockName;
        });

      if (index >= 0)
        arr[index].isOwned = true;
    },
    increaseFunds(state, by) {
      state.funds += by;
    },
    decreaseFunds(state, by) {
      state.funds -= by;
    }
  },
  actions: {
    randomizeStockPrice(context) {
      context.commit('randomizeStockPrice');
    },
    sellStock(context, payload) {
      context.commit('sellStock', payload.stockName);
      context.commit('increaseFunds', payload.total);
    },
    buyStock(context, payload) {
      context.commit('buyStock', payload.stockName);
      context.commit('decreaseFunds', payload.total);
    },
  }
});

// randomize stocks on init
store.dispatch('randomizeStockPrice');

Vue.use(VueRouter);
const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
});