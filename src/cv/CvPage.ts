import * as Vue from 'vue';
import { CvService, Cv } from './CvService';
import { CvDisplay } from './CvDisplay';
import { Component } from 'vue-property-decorator';
import { Loader } from '../common/loader';

@Component({
    template: `
       <div class="container">
           <h1 class="page-header">Who am I?</h1>
           <Loader :promise-for="promiseForCv">
                <template scope="props">             
                   <cv-display :cv="props.result"></cv-display>
                </template>
           </Loader>
       </div>
    `,
    components: {
        CvDisplay,
        Loader
    }
})
export class CvPage extends Vue {
    public promiseForCv: Promise<Cv> = CvService.find();
}
