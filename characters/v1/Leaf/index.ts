import { Bipinnate } from "./Bipinnate";
import { Petiole } from "./Petiole";
import { Sources } from "../Sources";

class Leaf extends Sources {
    /**
     * Petiole is the stalk that attaches the leaf blade to the stem.
     */
    petiole: Petiole;

    /**
     * Bipinnate leaf.
     */
    bipinnate: Bipinnate;

    /**
     * Creates an instance of leaf.
     */
    constructor() {
        super();
    }
}

export {
    Leaf,
    Petiole,
    Bipinnate
}