import * as Vue from 'vue';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';

export const Layout: Vue.ComponentOptions<{} & Vue> = {
    template: `
        <div class="page">
        <navbar></navbar>
        <section class="container-fluid">
            <div class="row">
                <div class="col-sm-3 col-md-2">
                    <sidebar></sidebar>
                </div>
                <div class="col-sm-9 col-md-10">
                    <router-view></router-view>
                </div>
            </div>
        </section>
        <footer>
                LINK TO MENTION LEGAL
        </footer>
        </div>
    `,
    components: {
        Navbar,
        Sidebar
    }
};
