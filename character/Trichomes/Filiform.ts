export class Filiform {
    /**
     * Fililform trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | null;

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
    orientation: 'patent' | 'antrorse' | 'retrorse' | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Filiform trichome.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../../character/Source";