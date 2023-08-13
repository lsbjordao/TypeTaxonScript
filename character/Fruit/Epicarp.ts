import { Trichomes } from '../Trichomes';

export class Epicarp {
    /**
     * Shape.
     */
    shape: 'straight' | 'undulate' | null;

    /**
     * Shape.
     */
    trichomes: Trichomes | null;

    /**
     * Prickles.
     */
    prickles: true | false | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Epicarp.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../../character/Source";