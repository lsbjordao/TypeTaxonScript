import { Replum } from "./Fruit/Replum";
import { Epicarp } from "./Fruit/Epicarp";

export class Fruit {
    /**
     * Replum.
     */
    replum: Replum | null;

    /**
     * Epicarp.
     */
    epicarp: Epicarp | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Describe Fruit.
     */
    constructor() {
        this.replum = null;
        this.epicarp = null;
        this.sources = [];
    }
}

import { Source } from "./Source";