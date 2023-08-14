import { Trichomes } from '../Trichomes';
import { Sources } from "../Sources";

export class Calyx extends Sources {
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
     * Trichomes.
     */
    trichomes: Trichomes;

    /**
     * Creates an instance of Calyx.
     */
    constructor() {
        super();
    }
}