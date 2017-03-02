export interface Cv {
    firstName: string;
    lastName: string;
    photo: string;
    linkedInUrl: string;
    twitterHandle: string;
    description: string;
}

export const CvService = {
    find: function(): Promise<Cv> {
        const mockCv = {
            firstName: 'Benoit',
            lastName: 'Lemoine',
            photo: 'https://www.gravatar.com/avatar/e35b54c02d2c091fd180014a7bb3e5ef',
            linkedInUrl: 'https://www.linkedin.com/in/benoit-lemoine-b63766a0/',
            twitterHandle: 'benoit_lemoine',
            description: `I am a fullstack developer who love functional programming. 
                            In my everyday job, I work with Scala / Play Framework for the backend
                            and Angular / TypeScript for frontend.
                            In the night, I play with Idris or React, and I like to share my knowledge with other people during meetups and conferences.`, //TODO - parle de prog func, front back et a coté
        };

        return Promise.resolve(mockCv);
    }
};
