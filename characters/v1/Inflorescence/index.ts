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
     * Type of inflorescence.
     */
    type: 'racemose' | 'paniculate'

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