import { Source } from "../../character/Source";

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
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Corolla.
     */
    constructor() {
        this.numPepals = null;
        this.length = null;
        this.shape = null;
        this.sources = [];
    }
}
