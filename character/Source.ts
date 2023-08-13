export class Source {
    /**
     * Authorship. Concatenate authors using this string: ' & '.
     */
    authorship: string | null;

    /**
     * Year.
     */
    year: number | null;

    /**
     * Title.
     */
    title: string | null;

    /**
     * Describe Fruit.
     */
    constructor() {
        this.authorship = null;
        this.year = null;
        this.title = null;
    }
}