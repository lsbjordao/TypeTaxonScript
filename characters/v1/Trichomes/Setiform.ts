import { Sources } from "../Sources";

export class Setiform extends Sources {
    /**
     * Setiform trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

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