import { Sources } from "../Sources";

export class Fasciculate extends Sources {
    /**
     * Are fasciculate trichomes present?
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | [true, false];

    /**
     * Fasciculate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Fasciculate trichome.
     */
    constructor() {
        super();
    }
}