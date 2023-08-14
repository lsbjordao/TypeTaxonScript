import { Trichomes } from '../Trichomes';
import { Prickles } from '../Prickles';
import { Sources } from "../Sources";

export class Epicarp extends Sources {
    /**
     * Type.
     */
    type: 'monospermic' | 'undivided';

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
     * Creates an instance of Epicarp.
     */
    constructor() {
        super();
    }
}