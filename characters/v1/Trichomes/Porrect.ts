import { Sources } from "../Sources";

export class Porrect extends Sources {
    /**
     * Are porrect trichomes present?
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | [true, false];

    /**
     * Are Porrect-stellate trichomes present?
     */
    stellate: true | false;

    /**
     * Are Porrect-dendritic trichomes present?
     */
    dendritic: true | false;

    /**
     * Porrect trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Porrect trichome.
     */
    constructor() {
        super();
    }
}