import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import * as Vue from 'vue';
import { router } from './route'

new Vue({
    el: '#app',
    router,
    template: `<router-view></router-view>`
});
