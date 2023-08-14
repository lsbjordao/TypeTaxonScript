import { Trichomes } from '../Trichomes';
import { Prickles } from '../Prickles';

export class Epicarp {
    /**
     * Type.
     */
    type: 'monospermic' | 'undivided';

    /**
     * Shape.
     */
    shape: 'straight' | 'undulate';

    /**
     * Prickles.
    */
    prickles: Prickles;

    /**
     * Trichomes.
     */
    trichomes: Trichomes;

    /**
      * Source.
      */
    sources: Source[];

    /**
     * Creates an instance of Epicarp.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../Source/Source";