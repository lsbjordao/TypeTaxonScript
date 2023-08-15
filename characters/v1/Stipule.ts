import { Trichomes } from './Trichomes';
import { Prickles } from './Prickles';
import { Sources } from "./Sources";

export class Stipule extends Sources {
    /**
     * Stipule length in meters (m).
     */
    length: number;

    /**
     * Shape of Stipule.
     */
    shape: 'linear-subulate' | 'lanceolate' | 'deltate' | 'ovate';

    /**
     * Nervation of Stipule.
     */
    nervation: '1-nerved' | 'plurinerved';

    /**
     * Persistance of Stipule.
     */
    persistance: 'persistent' | 'caducous';

    /**
     * Prickles.
    */
    prickles: Prickles;

    /**
     * Trichomes.
     */
    trichomes: Trichomes;
    
    /**
     * Creates an instance of Stipule.
     */
    constructor() {
        super();
    }
}