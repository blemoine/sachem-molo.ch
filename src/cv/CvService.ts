import { Cv } from './model';

export const CvService = {
    find: function(): Promise<Cv> {
        return Promise.resolve({
            firstName: 'Benoit',
            lastName: 'Lemoine',
            photo: '', //TODO
            linkedInUrl: 'https://www.linkedin.com/in/benoit-lemoine-b63766a0/',
            twitterUrl: 'https://twitter.com/benoit_lemoine',
            description: '', //TODO
        });
    }
};
