export class Epicarp {
    /**
     * Shape.
     */
    shape: 'straight' | 'undulate' | null;

    /**
     * Prickles.
     */
    prickles: true | false | null;

    /**
     * Creates an instance of Epicarp.
     */
    constructor() {
        this.shape = null;
        this.prickles = null;
    }
}
