import { Replum } from "./Fruit/Replum";
import { Epicarp } from "./Fruit/Epicarp";

import { Source } from "../character/Source";

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
    source: Source | null;

    /**
     * Describe Fruit.
     */
    constructor() {
        this.replum = null;
        this.epicarp = null;
        this.source = null;
    }
}