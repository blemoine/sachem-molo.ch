import * as Vue from 'vue';
import VueRouter from 'vue-router'
import { CvPage } from './cv/CvPage';
import { Layout } from './layout/layout';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/', component: Layout, children: [
            { path: '', redirect: '/cv' },
            { path: '/cv', component: CvPage },
        ]
        },

    ]
});