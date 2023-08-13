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
     * Creates an instance of Epicarp.
     */
    constructor() {
        this.shape = null;
        this.trichomes = null;
        this.prickles = null;
    }
}
