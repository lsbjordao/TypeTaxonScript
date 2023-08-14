export class Source {
    /**
     * Method of obtaining the source.
     */
    obtainingMethod: 'nakedEyes' | 'stereoscopy' | 'OM' | 'SEM' | 'TEM';

    /**
     * Type of the source.
     */
    sourceType: 'article' | 'book' | 'chapterOfBook' | 'misc';

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