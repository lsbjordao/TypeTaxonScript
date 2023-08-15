import { Sources } from "../Sources";

export class Granular extends Sources {
    /**
     * Granular trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Creates an instance of Granular trichome.
     */
    constructor() {
        super();
    }
}