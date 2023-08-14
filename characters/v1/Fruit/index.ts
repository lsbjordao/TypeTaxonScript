import { Replum } from "./Replum";
import { Epicarp } from "./Epicarp";
import { Sources } from "../Sources";

class Fruit extends Sources {
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
     * Creates an instance of Fruit.
     */
    constructor() {
        super();
    }
}

export{
    Fruit,
    Replum,
    Epicarp
}