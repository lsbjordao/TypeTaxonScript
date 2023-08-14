import { Trichomes } from '../Trichomes';
import { Prickles } from '../Prickles';
import { Sources } from "../Sources";

export class Replum extends Sources {
    /**
     * Shape.
     */
    shape: 'straight' | 'undulate';

    /**
     * Prickles.
     */
    prickles: Prickles;

    /**
     * Trichomes.
     */
    trichomes: Trichomes;

    /**
     * Creates an instance of Replum.
     */
    constructor() {
        super();
    }
}