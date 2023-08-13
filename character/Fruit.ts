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