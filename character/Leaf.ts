import { Paraphillidia } from "./Leaf/Paraphillidia";
import { Petiole } from "./Leaf/Petiole";

import { Source } from "../character/Source";

export class Leaf {
    /**
     * Petiole is the stalk that attaches the leaf blade to the stem.
     */
    petiole: Petiole | null;

    /**
     * Paraphillidia is a pair of appendixes at the bottom of a pinna.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    paraphillidia: Paraphillidia | null;

    /**
     * Source
     */
    source: Source | null;

    /**
     * Describe leaf.
     */
    constructor() {
        this.petiole = null;
        this.paraphillidia = null;
        this.source = null;
    }
}