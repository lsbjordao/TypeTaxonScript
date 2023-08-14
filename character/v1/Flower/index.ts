import { Corolla } from "./Corolla";
import { Calyx } from "./Calyx";

class Flower {
    /**
     * Calyx.
     */
    calyx: Calyx;

    /**
     * Corolla.
     */
    corolla: Corolla;

    /**
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of Flower.
     */
    constructor() {
        this.sources = [];
    }
}
export {
    Flower,
    Corolla,
    Calyx
}
import { Source } from "../Source";