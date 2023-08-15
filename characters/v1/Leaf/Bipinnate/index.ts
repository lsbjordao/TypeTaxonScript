import { Pinnae } from "./Pinnae"
import { Rachis } from "./Rachis"
import { Sources } from "../../Sources"

class Bipinnate extends Sources {
    /**
     * Pinna of a bipinnate leaf, which occur in pairs.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    pinnae: Pinnae

    /**
     * leaf rachis of a bipinnate leaf.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    rachis: Rachis

    /**
     * Creates an instance of leaf.
     */
    constructor() {
        super()
    }
}

export {
    Bipinnate,
    Pinnae,
    Rachis
}