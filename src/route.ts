import * as Vue from 'vue';
import VueRouter from 'vue-router'
import { CvPage } from './cv/CvPage';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        { path: '/cv', component: CvPage },
    ]
});