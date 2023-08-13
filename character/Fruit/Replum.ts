import { Source } from "../../character/Source";

export class Replum {
    /**
     * Prickles.
     */
    prickles: true | false | null;
    
    /**
     * Shape.
     */
    shape: 'straight' | 'undulate' | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Replum.
     */
    constructor() {
        this.shape = null;
        this.prickles = null;
        this.sources = [];
    }
}
