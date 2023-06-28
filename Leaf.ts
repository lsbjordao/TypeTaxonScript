export class Leaf {
    /**
     * Petiole
     */
    petiole: "present" | "sessile" | null;

    /**
     * Tamanho da Leaf.
     */
    tamanho: number | null;

    /**
     * Describe leaf.
     */
    constructor() {
        this.petiole = null;
        this.tamanho = null;
    }
}