import { Sources } from "../Sources";

export class Granular extends Sources {
    /**
     * Are granular trichomes present?
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | [true, false];

    /**
     * Creates an instance of Granular trichome.
     */
    constructor() {
        super();
    }
}