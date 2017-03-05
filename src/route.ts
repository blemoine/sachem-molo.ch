import * as Vue from 'vue';
import VueRouter from 'vue-router'
import { CvPage } from './cv/CvPage';
import { Layout } from './layout/layout';
import { PostsPage } from './posts/PostsPage';
import { PostDetailPage } from './posts/detail/PostDetailPage';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/', component: Layout, children: [
            { path: '', redirect: '/post' },
            { path: '/cv', component: CvPage },
            { path: '/post', component: PostsPage },
            { path: '/post/:postId', component: PostDetailPage, props: true }
        ]
        },
    ]
});