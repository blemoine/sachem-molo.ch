import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Cv } from './model';

@Component({
    template: `
       <section>
           {{cv.firstName}}  {{cv.lastName}}         
       </section>
    `
})
export class CvDisplay extends Vue {
    @Prop
    cv: Cv
}