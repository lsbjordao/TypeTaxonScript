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
     * Describe Fruit.
     */
    constructor() {
        this.replum = null;
        this.epicarp = null;
    }
}