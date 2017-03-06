import * as Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Post, PostsService } from '../posts/PostsService';

@Component({
    template: `
        <ul class="nav nav-sidebar">
            <li v-for="post in posts" :key="post.id" >
                <router-link active-class="active" :to="'/post/'+post.id">{{post.title}}</router-link></router-link>
            </li>
        </ul>  
    `
})
export class Sidebar extends Vue {
    public posts: Array<Post> = [];

    created() {
        PostsService.findAll().then(posts => this.posts = posts.slice(0, 10));
    }
}
