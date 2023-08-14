export class Calyx {
    /**
     * Number of sepals.
     */
    numSepals: number;

    /**
     * Sepals length in milimeters (mm).
     */
    length: number;

    /**
     * Calyx shape.
     */
    shape: "campanulate" | "pappiform";

    /**
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of Calyx.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../Source/Source";