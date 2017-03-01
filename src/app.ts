import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import * as Vue from 'vue';
import { layout } from './layout/layout';
import { CvPage } from './cv/CvPage';

new Vue({
    el: '#app',
    template: `<layout>
                 <cv-page></cv-page>
               </layout>`,
    components: {
        layout,
        CvPage
    }
});
