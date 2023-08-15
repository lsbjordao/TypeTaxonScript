import { Pinnae } from "./Pinnae";
import { Rachis } from "./Rachis";
import { Rachilla } from "./Rachilla";
import { Leaflet } from "./Leaflet";
import { Paraphillidia } from "./Paraphillidia";
import { Sources } from "../../Sources";

class Bipinnate extends Sources {
    /**
     * Pinna of a bipinnate leaf, which occur in pairs.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    pinnae: Pinnae;

    /**
     * leaf rachis of a bipinnate leaf.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    rachis: Rachis;

    /**
     * pinna rachilla of a bipinnate leaf.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    rachilla: Rachilla;

    /**
     * Leaflets of a pinna.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    leaflet: Leaflet;

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
    Bipinnate,
    Pinnae,
    Rachis,
    Rachilla,
    Leaflet,
    Paraphillidia
}