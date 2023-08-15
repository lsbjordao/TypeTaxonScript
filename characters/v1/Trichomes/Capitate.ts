import { Sources } from "../Sources";

export class Capitate extends Sources {
    /**
     * Are capitate trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent';

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