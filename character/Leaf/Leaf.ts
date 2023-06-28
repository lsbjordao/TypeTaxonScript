import { Paraphillidia } from "./Paraphillidia";
import { Petiole } from "./Petiole";

export class Leaf {
    /**
     * Petiole is the stalk that attaches the leaf blade to the stem.
     */
    petiole: Petiole | null;

    /**
     * Paraphillidia is a pair of appendixes at the bottom of a pinna.
     */
    paraphillidia: Paraphillidia | null;

    /**
     * Describe leaf.
     */
    constructor() {
        this.petiole = null;
        this.paraphillidia = null;
    }
}