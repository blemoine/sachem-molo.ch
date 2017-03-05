import moment = require('moment');
import { Post, posts } from './posts';

export const PostsService = {

    findAll(): Promise<Array<Post>> {
        return Promise.resolve(posts.sort((post1: Post, post2: Post) => {
            const date1 = post1.date;
            const date2 = post2.date;
            if (date1.isSame(date2)) {
                return 0
            } else if (date1.isAfter(date2)) {
                return -1;
            } else {
                return 1;
            }
        }));
    },

    findById(id: string): Promise<Post> {
        return Promise.resolve(posts.find(p => p.id === id))
    },

    excerpt(post: Post): string {
        const text = post.text;
        if (text) {
            const firstParagraphEndIdx = text.indexOf("</p>");
            if (firstParagraphEndIdx > 0) {
                return text.substr(0, firstParagraphEndIdx);
            } else {
                return text;
            }

        } else {
            return '';
        }
    }
};
