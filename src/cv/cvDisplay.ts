import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Cv } from './CvModel';
import './cvDisplay.less';

@Component({
    template: `
       <section class="row">
                
               <div class="clearfix col-lg-12">
                   <img alt="avatar" :src="cv.photo" class="avatar"/>
                   {{cv.firstName}}  {{cv.lastName}}<br />
                   <a :href="twitterUrl">{{cv.twitterHandle}}</a><br />
                   <a :href="cv.linkedInUrl">LinkedIn</a>
               </div>
               
               <section class="description col-lg-12">
                    {{cv.description}}   
                </section>
       </section>
    `
})
export class CvDisplay extends Vue {
    @Prop
    cv: Cv;

    get twitterUrl():string {
        return 'https://twitter.com/' + this.cv.twitterHandle;
    }
}