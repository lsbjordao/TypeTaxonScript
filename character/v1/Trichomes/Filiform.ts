export class Filiform {
    /**
     * Filiform trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Filiform trichomes length in milimeters (mm).
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
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of Filiform trichome.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../Source";