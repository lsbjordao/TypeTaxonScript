export class Source {
    /**
     * Type of the source.
     */
    type: 'article' | 'book' | 'chapterOfBook' | 'misc';

    /**
     * Authorship. Concatenate authors using this string: ' & '.
     */
    authorship: string;

    /**
     * Year.
     */
    year: number;

    /**
     * Title.
     */
    title: string;

    /**
     * Describe Source.
     */
    constructor() { }
}