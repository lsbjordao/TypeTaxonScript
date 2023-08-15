import { Sources } from "../Sources";

export class Capitate extends Sources {
    /**
     * Are capitate trichomes present?
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | [true, false];

    /**
     * Are capitate-subsessile trichomes present?
     */
    subsessile: true | false;

    /**
     * Are capitate-filiform trichomes present?
     */
    filiform: true | false;

    /**
     * Are capitate-setiform trichomes present?
     */
    setiform: true | false;

    /**
     * Capitate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Capitate trichome.
     */
    constructor() {
        super();
    }
}