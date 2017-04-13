import Home from './components/home/Home.vue';
import Portfolio from './components/stocks/PortfolioList.vue';
import Stocks from './components/stocks/StockList.vue';

export const routes = [
    {path: '', component: Home},
    {path: '/portfolio', component: Portfolio},
    {path: '/stocks', component: Stocks},
];