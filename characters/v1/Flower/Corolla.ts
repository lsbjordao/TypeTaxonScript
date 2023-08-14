import { Trichomes } from '../Trichomes';
import { Sources } from "../Sources";

export class Corolla extends Sources {
    /**
     * Number of petals.
     */
    numPepals: number;

    /**
     * Petals length in milimeters (mm).
     */
    length: number;

    /**
     * Corolla shape.
     */
    shape: "campanulate" | "turbinate";

    /**
     * Trichomes.
     */
    trichomes: Trichomes;

    /**
     * Creates an instance of Corolla.
     */
    constructor() {
        super();
    }
}