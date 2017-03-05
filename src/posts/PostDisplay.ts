import * as Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Post } from './posts';
import { PostsService } from './PostsService';

@Component({
    template: `
    <section class="post-wrapper">
        <h2><router-link :to="'/post/'+post.id">{{formattedDate}} - {{post.title}}</router-link></h2>
        <div v-html="excerpt">
        </div>
    </section>
    `
})
export class PostDisplay extends Vue {

    @Prop
    post: Post;

    get formattedDate() {
        return this.post.date.format('DD MMMM YYYY');
    }

    get excerpt() {
        return PostsService.excerpt(this.post);
    }
}