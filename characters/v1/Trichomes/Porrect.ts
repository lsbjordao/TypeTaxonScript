import { Sources } from "../Sources";

export class Porrect extends Sources {
    /**
     * Porrect trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

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