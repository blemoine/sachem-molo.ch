import moment = require('moment');
import { Post, posts } from './posts';

export const PostsService = {

    findAll(): Promise<Array<Post>> {
        return Promise.resolve(posts);
    }
};