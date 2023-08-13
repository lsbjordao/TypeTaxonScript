import { Trichomes } from '../Trichomes';

export class Epicarp {
    /**
     * Shape.
     */
    shape: 'straight' | 'undulate';

    /**
     * Shape.
     */
    trichomes: Trichomes;

    /**
     * Prickles.
     */
    prickles: true | false;

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