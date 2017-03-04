import * as moment from 'moment';

export interface Post {
    id: string;
    date: moment.Moment
    title: string;
    text: string;
}

export const posts: Array<Post> = [{
    id: "2",
    date: moment('2017-03-04'),
    title: 'Mon deuxième post',
    text: `<p>Ceci est le 2eme texte que j'écris</p>`
}, {
    id: "1",
    date: moment('2017-03-03'),
    title: 'Mon premier post',
    text: `<p>Ceci est le premier texte que j'écris</p>`
}];