import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Mainpage from "./components/content/page/Main.vue";
import SignIn from "./components/content/page/SignIn.vue";
import E404 from "./components/content/page/E404.vue";

const routes = [
    {
        name: 'mainpage',
        path: "",
        component: Mainpage
    },
    {
        name: 'SignIn',
        path: "/SignIn",
        component: SignIn
    }
    ,
    {
      path: "*",
      component: E404
    }
];

export const router = new VueRouter({
    routes,
    mode: 'history'

})