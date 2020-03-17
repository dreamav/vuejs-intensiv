import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

const routes = [
    {
        path: '/products',
        component: ProductsList
    },
    {
        path: '/cart',
        component: Cart
    }
]

export const router = new VueRouter({
    routes: routes
})
