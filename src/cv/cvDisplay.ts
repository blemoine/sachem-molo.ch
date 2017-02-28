import * as Vue from 'vue';

export const cvDisplay: Vue.ComponentOptions<Vue> = {
    props: ['cv'],
    template: `
       <section>
           {{cv.firstName}}           
       </section>
    `,
};