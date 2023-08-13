import { Trichomes } from '../Trichomes';
import { Prickles } from '../Prickles';

export class Replum {
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
     * Creates an instance of Replum.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../../character/Source";