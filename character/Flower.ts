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
     * Describe Flower.
     */
    constructor() {
        this.calyx = null;
        this.corolla = null;
    }
}