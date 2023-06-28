import { Corolla } from "./Corolla";
import { Calyx } from "./Calyx";

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