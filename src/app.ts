import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import * as Vue from 'vue';
import { layout } from './layout/layout';
import { cv } from './cv/cv';

new Vue({
    el: '#app',
    template: `<layout>
                 <cv></cv>
               </layout>`,
    components: {
        layout,
        cv
    }
});
