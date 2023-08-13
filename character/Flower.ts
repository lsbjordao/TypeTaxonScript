import { Corolla } from "./Flower/Corolla";
import { Calyx } from "./Flower/Calyx";

export class Flower {
    /**
     * Calyx.
     */
    calyx: Calyx | null;

    /**
     * Corolla.
     */
    corolla: Corolla | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Describe Flower.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "./Source";