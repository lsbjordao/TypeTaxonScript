import { CapitateInflorescence } from "./CapitateInflorescence";
import { Spicate } from "./Spicate";
import { Sources } from "../Sources";
import { Peduncle } from "./Peduncle";

class Inflorescence extends Sources {
    /**
     * Peduncle.
     */
    peduncle: Peduncle;
    
    /**
     * Calyx.
     */
    capitate: CapitateInflorescence;

    /**
     * Corolla.
     */
    spicate: Spicate;

    /**
     * Shape of capitate inflorescence.
     */
    shape: 'moriform' | 'conelike'

    /**
     * Creates an instance of Inflorescence.
     */
    constructor() {
        super();
    }
}

export {
    Inflorescence,
    Peduncle,
    CapitateInflorescence,
    Spicate
}