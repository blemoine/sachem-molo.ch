import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import * as Vue from 'vue';
import { router } from './route'
import { layout } from './layout/layout';

new Vue({
    el: '#app',
    router,
    template: `<layout>
                 <router-view></router-view>
               </layout>`,
    components: {
        layout
    }
});
