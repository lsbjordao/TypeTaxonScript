import { Paraphillidia } from "./Paraphillidia";

export class Leaf {
    /**
     * Petiole can be present or sessile.
     */
    petiole: "present" | "sessile" | null;

    /**
     * Paraphillidia.
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