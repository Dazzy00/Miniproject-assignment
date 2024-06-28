import { createRouter,createWebHistory } from "vue-router";
import Home from "./../components/Home.vue"
import Dishes from "./../components/Dishes.vue"
import AboutUs from "./../components/AboutUs.vue"
import Cart from "./../components/Cart.vue"
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/Dishes',
        name: 'dishes',
        component: Dishes,
    },
    {
        path: '/AboutUs',
        name: 'about',
        component: AboutUs,
    },
    {
        path: '/Cart',
        name: 'cart',
        component: Cart,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes, 
  })
  
  export default router