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
            description: `Je suis un developpeur fullstack qui apprécie tout particulièrement la programmation fonctionnelle.
                            Au quotidien, je travaille principalement avec Scala / Play Framework pour le backend et 
                            TypeScript / Angular pour le frontend.
                            Mais quand vient la nuit, j'aime tester de nouvelles technologies comme Idris, Haskell, React ou Vue.
                         `
        };

        return Promise.resolve(mockCv);
    }
};
