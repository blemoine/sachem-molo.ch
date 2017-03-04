import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import * as moment from 'moment';
import 'moment/locale/fr';
moment.locale('fr');

import * as Vue from 'vue';
import { router } from './route'

new Vue({
    el: '#app',
    router,
    template: `<router-view></router-view>`
});
