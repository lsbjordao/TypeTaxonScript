// Import characters
import { Trichomes } from '../../../Trichomes'
import { Prickles } from '../../../Prickles'
import { Rachilla } from "../Pinnae/Rachilla";
import { Paraphillidia } from "./Paraphillidia";
import { Leaflet } from "./Leaflet";
import { Gall } from "../../../Gall";

// Import methods
import { 
    _setNumberOfPairs, 
    _setNumberOfPairsMinMax, 
    _setNumberOfPairsRarelyMin,
    _setNumberOfPairsRarelyMax
} from '../../../methods/sizes'

// Import annotation classes
import { Sources } from "../../../Sources";

class Pinnae extends Sources {
    /**
     * Number of pinnae pairs
     */
    numberOfPairs: {
        value?: number | null
        rarelyMin?: number | null
        rarelyMax?: number | null
        min?: number | null
        max?: number | null
    } | null

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
     * Prickles in stems.
    */
    prickles: Prickles

    /**
     * Trichomes in stems.
     */
    trichomes: Trichomes
    
    /**
     * Gall on a pinna.
     */
    gall: Gall;

    /**
     * Creates an instance of leaf.
     */
    constructor() {
        super();
    }

    /**
     * Sets a single value for number of pairs.
     *
     * @param value - The number of pairs value (integer).
     */
    setNumberOfPairs(value: number): void {
        _setNumberOfPairs(value, this)
    }

    /**
     * Sets the number of pairs miminum and maximum values.
     *
     * @param min - The minimum number of pairs value (integer).
     * @param max - The maximum number of pairs value (integer).
     */
    setNumberOfPairsMinMax(min: number, max: number): void {
        _setNumberOfPairsMinMax(min, max, this)
    }

    /**
     * Sets a single rarely value for number of pairs.
     *
     * @param min - The rarely minimum number of pairs value (integer).
     */
    setNumberOfPairsRarelyMin(min: number): void {
        _setNumberOfPairsRarelyMin(min, this)
    }

    /**
     * Sets a single rarely value for number of pairs.
     *
     * @param min - The rarely maximum number of pairs value (integer).
     */
    setNumberOfPairsRarelyMax(max: number): void {
        _setNumberOfPairsRarelyMax(max, this)
    }

}

export {
    Pinnae,
    Rachilla,
    Leaflet,
    Paraphillidia,
    Gall
}