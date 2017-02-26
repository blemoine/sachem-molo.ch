import * as Vue from 'vue';
import { layout } from './layout';

new Vue({
    el: '#app',
    template: `<layout></layout>`,
    components: {
        layout
    }
});
