import { Sources } from "../Sources";

export class Stellate extends Sources {
    /**
     * Stellate trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Are stellate-subsessile trichomes present?
     */
    subsessile: true | false;

    /**
     * Are stellate-stalked trichomes present?
     */
    stalked: true | false;

    /**
     * Are stellate-lepidote trichomes present?
     */
    lepidote: true | false;

    /**
     * Stellate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Stellate trichome.
     */
    constructor() {
        super();
    }
}