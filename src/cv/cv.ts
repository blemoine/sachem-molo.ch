import * as Vue from 'vue';
import { CvService } from './CvService';
import { Cv } from './model';
import { cvDisplay } from './cvDisplay';

export const cv: Vue.ComponentOptions<{ cv: Cv } & Vue> = {
    data: () => ({
        cv: {}
    }),
    template: `
       <div>
           <h1 class="page-header">Who am I?</h1>
           <cv-display :cv="cv"></cv-display>           
       </div>
    `,
    components: {
        cvDisplay
    },
    beforeCreate: function() {
        CvService.find().then((cv) => {
            this.cv = cv;
        });
    }
};
