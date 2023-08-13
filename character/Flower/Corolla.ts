import { Trichomes } from '../Trichomes';

export class Corolla {
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
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of Corolla.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "../../character/Source";