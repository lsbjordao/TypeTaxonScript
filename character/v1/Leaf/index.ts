import { Paraphillidia } from "./Paraphillidia";
import { Petiole } from "./Petiole";
import { Source } from "../Source";

class Leaf {
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
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of leaf.
     */
    constructor() {
        this.sources = [];
    }
}

export {
    Leaf,
    Petiole,
    Paraphillidia
}

