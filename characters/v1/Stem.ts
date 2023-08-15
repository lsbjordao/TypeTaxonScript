import { Trichomes } from './Trichomes';
import { Prickles } from './Prickles';
import { Sources } from "./Sources";

export class Stem extends Sources {
    /**
     * Stem length in meters (m).
     */
    length: number;

    /**
     * Shape of Stem.
     */
    shape: 'cylindric' | '3-gonal' | '4-gonal' | '5-gonal';

    /**
     * Orientation of Stem.
     */
    orientation: 'erect' | 'ascending' | 'scandent' | 'decumbent' | 'procumbent';

    /**
     * Prickles.
    */
    prickles: Prickles;

    /**
     * Trichomes.
     */
    trichomes: Trichomes;
    
    /**
     * Creates an instance of Stem.
     */
    constructor() {
        super();
    }
}