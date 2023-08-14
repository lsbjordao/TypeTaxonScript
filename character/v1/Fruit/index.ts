import { Replum } from "./Replum";
import { Epicarp } from "./Epicarp";

class Fruit {
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
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of Fruit.
     */
    constructor() {
        this.sources = [];
    }
}
export{
    Fruit,
    Replum,
    Epicarp
}
import { Source } from "../Source";