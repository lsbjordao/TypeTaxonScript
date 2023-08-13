import { Corolla } from "./Flower/Corolla";
import { Calyx } from "./Flower/Calyx";

export class Flower {
    /**
     * Calyx.
     */
    calyx: Calyx;

    /**
     * Corolla.
     */
    corolla: Corolla;

    /**
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of Flower.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "./Source";