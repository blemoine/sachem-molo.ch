import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';


@Component({
    template: `
      <div>
        <slot v-if="result !== null" :result="result"></slot>
        <div  v-else>LOADER</div>
      </div>
`
})
export class Loader<A> extends Vue {
    @Prop
    public promiseFor: Promise<A>;

    public result: A|null = null;

    beforeMount() {
        this.promiseFor.then((r) => {
            this.result = r;
        });
    }
}