import { Paraphillidia } from "./Paraphillidia";
import { Petiole } from "./Petiole";
import { Sources } from "../Sources";

class Leaf extends Sources {
    /**
     * Petiole is the stalk that attaches the leaf blade to the stem.
     */
    petiole: Petiole;

    /**
     * Paraphillidia is a pair of appendixes at the bottom of a pinna.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    paraphillidia: Paraphillidia;

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
    Paraphillidia
}