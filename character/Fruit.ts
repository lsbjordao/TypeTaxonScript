import { Replum } from "./Fruit/Replum";
import { Epicarp } from "./Fruit/Epicarp";

export class Fruit {
    /**
     * Type.
     */
    type: 'craspedium' | 'sacellum';

    /**
     * Replum.
     */
    replum: Replum;

    /**
     * Epicarp.
     */
    epicarp: Epicarp;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Fruit.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "./Source";