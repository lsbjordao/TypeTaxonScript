export class Dendritic {
    /**
     * Dendritic trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Dendritic trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of Dendritic trichome.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../Source";