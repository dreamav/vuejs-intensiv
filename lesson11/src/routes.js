import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";
import E404 from "./components/E404";

const routes = [
    {
        path: '',
        redirect: {name: 'products'}
    },
    {
        name: 'products',
        path: '/products',
        component: ProductsList
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '*',
        component: E404
    }
]

export const router = new VueRouter({
    routes: routes,
    // mode: 'history'
})
