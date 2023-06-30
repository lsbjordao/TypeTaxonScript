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
     * Creates an instance of Replum.
     */
    constructor() {
        this.shape = null;
        this.prickles = null;
    }
}
