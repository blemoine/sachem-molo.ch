import firstPost from './repository/first-post';
import secondPost from './repository/second-post';
import { Post } from './PostsService';

import * as moment from 'moment';


export const posts: Array<Post> = [firstPost, secondPost].map(o => {
    return Object.assign({}, o, {date:moment(o.date)});
});