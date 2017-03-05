import moment = require('moment');
import { Post, posts } from './posts';

export const PostsService = {

    findAll(): Promise<Array<Post>> {
        return Promise.resolve(posts);
    },

    excerpt(post: Post): string {
        if (post.text) {
            const firstParagraphEndIdx = post.text.indexOf("</p>");
            if (firstParagraphEndIdx > 0) {
                return post.text.substr(0, firstParagraphEndIdx);
            } else {
                return post.text;
            }

        }
        return '';
    }
};