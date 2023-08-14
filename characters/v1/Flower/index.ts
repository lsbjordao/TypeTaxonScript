import { Corolla } from "./Corolla";
import { Calyx } from "./Calyx";
import { Sources } from "../Sources";

class Flower extends Sources {
    /**
     * Calyx.
     */
    calyx: Calyx;

    /**
     * Corolla.
     */
    corolla: Corolla;

    /**
     * Creates an instance of Flower.
     */
    constructor() {
        super();
    }
}

export {
    Flower,
    Corolla,
    Calyx
}