import * as Vue from 'vue';
import { navbar } from './navbar';
import { sidebar } from './sidebar';

export const layout = Vue.component('layout', {
    template: `
        <div class="page">
        <navbar></navbar>
        <section class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-2">
                    <sidebar></sidebar>
                </div>
                <div class="col-sm-9 col-md-10">
                    <slot></slot>
                </div>
            </div>
        </section>
        <footer>
                LINK TO MENTION LEGAL
        </footer>
        </div>
    `,
    data: () => ({
        message: 'You loaded this page on ' + new Date()
    }),
    component: {
        navbar,
        sidebar
    }
});
