

import Vue from 'vue';
import VueRouter from 'vue-router';
import Articles from './ArticlesComponent';
import Logout from './logout';
import Login from './login';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',
    routes: [
        {
            name: 'login',
            path: '/login',
            component: Login,
        },
        {
            name: 'logout',
            path: '/logout',
            component: Logout,
            meta: {
                requiresAuth: true
            }
        },
        {
            name: 'articles',
            path: '/',
            component: Articles
        }
    ]
});


export default router;
