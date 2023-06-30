export class Corolla {
    /**
     * Number of petals.
     */
    numPepals: number | null;

    /**
     * Petals length in milimeters (mm).
     */
    length: number | null;

    /**
     * Corolla shape.
     */
    shape: "campanulate" | "turbinate" | null;

    /**
     * Creates an instance of Corolla.
     */
    constructor() {
        this.numPepals = null;
        this.length = null;
        this.shape = null;
    }
}
