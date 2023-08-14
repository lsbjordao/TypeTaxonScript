interface IDescriptionAuthorship {
    name: string;
    date: string;
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