// Import characters
import { Rachilla } from "../Pinnae/Rachilla";
import { Paraphillidia } from "../Pinnae/Paraphillidia";
import { Leaflet } from "./Leaflet";

// Import annotation classes
import { Sources } from "../../../Sources";

class Pinnae extends Sources {
    /**
     * Number of pinnae pair(s).
     */
    numberOfPairs: number;

    /**
     * Rachilla of a pinna.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    rachilla: Rachilla;

    /**
     * leaflet of a pinna.
     * 
     * @source [Barneby (1991)](http://www.teste.com/)
     */
    leaflet: Leaflet;

    /**
     * Paraphillidia of a pinna.
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
    Pinnae,
    Rachilla,
    Leaflet,
    Paraphillidia
}