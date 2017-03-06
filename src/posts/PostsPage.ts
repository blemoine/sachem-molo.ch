import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { PostsService, Post } from './PostsService';
import { Loader } from '../common/loader';
import { PostDisplay } from './PostDisplay';

@Component({
    template: `
       <div>
           <h1 class="page-header">Posts</h1>
           <Loader :promise-for="promiseForPosts">
                <template scope="props">             
                  <PostDisplay v-for="post in props.result" :key="post.id" :post="post"/>
                </template>
           </Loader>
       </div>
    `,
    components: {
        Loader,
        PostDisplay
    }
})
export class PostsPage extends Vue {
    public promiseForPosts: Promise<Array<Post>> = PostsService.findAll();
}
