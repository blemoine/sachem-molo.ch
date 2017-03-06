import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { PostsService, Post } from '../PostsService';
import { Loader } from '../../common/loader';
import { PostDetailDisplay } from './PostDetailDisplay';

@Component({
    template: `
       <div>
           <h1 class="page-header">Posts</h1>
           <Loader :promise-for="promiseForPost">
                <template scope="props">             
                  <PostDetailDisplay :post="props.result"/>
                </template>
           </Loader>
       </div>
    `,
    components: {
        Loader,
        PostDetailDisplay
    }
})
export class PostDetailPage extends Vue {

    @Prop
    public postId: string;

    public promiseForPost: Promise<Post>;

    created() {
        this.promiseForPost = PostsService.findById(this.postId);
    }

}
