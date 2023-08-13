export class Replum {
    /**
     * Prickles.
     */
    prickles: true | false;
    
    /**
     * Shape.
     */
    shape: 'straight' | 'undulate';

    /**
     * Source
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