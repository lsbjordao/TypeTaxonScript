import { Sources } from "../Sources";

export class Setiform extends Sources {
    /**
     * Are setiform trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent';

    /**
     * Are Setiform-barbellate trichomes present?
     */
    barbellate: true | false;

    /**
     * Are Setiform-glochidiate trichomes present?
     */
    glochidiate: true | false;

    /**
     * Setiform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Orientation of trichomes.
     */
    orientation: 'patent' | 'antrorse' | 'retrorse';

    /**
     * Creates an instance of Setiform trichome.
     */
    constructor() {
        super();
    }
}