import { Source } from "../../character/Source";

export class Calyx {
    /**
     * Number of sepals.
     */
    numSepals: number | null;

    /**
     * Sepals length in milimeters (mm).
     */
    length: number | null;

    /**
     * Calyx shape.
     */
    shape: "campanulate" | "pappiform" | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Calyx.
     */
    constructor() {
        this.numSepals = null;
        this.length = null;
        this.shape = null;
        this.sources = [];
    }
}
