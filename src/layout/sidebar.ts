import * as Vue from 'vue';

export const sidebar = Vue.component('sidebar', {
    template:`
        <ul class="nav nav-sidebar">
            <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
            <li><a href="#">POST 1</a></li>
            <li><a href="#">POST 2</a></li>
            <li><a href="#">POST 3</a></li>
        </ul>  
    `
});