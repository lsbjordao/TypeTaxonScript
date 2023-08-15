import { Sources } from "../Sources";

export class Lepidote extends Sources {
    /**
     * Are lepidote trichomes present?
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | [true, false];

    /**
     * Lepidote trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Lepidote trichome.
     */
    constructor() {
        super();
    }
}