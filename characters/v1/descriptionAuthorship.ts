interface IDescriptionAuthorship {
    name: string;
}

class DescriptionAuthorship {
    /**
    * Authorship.
    */
    authorship: IDescriptionAuthorship[];

    constructor() {
        this.authorship = [];
    }

    public addAuthor(data: IDescriptionAuthorship) {
        this.authorship.push(data);
    }
}

export {
    IDescriptionAuthorship,
    DescriptionAuthorship
}