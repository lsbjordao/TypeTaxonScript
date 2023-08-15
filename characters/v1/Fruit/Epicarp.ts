import { Trichomes } from '../Trichomes'
import { Prickles } from '../Prickles'
import { Sources } from "../Sources"

export class Epicarp extends Sources {
    /**
     * Type of epicarp.
     */
    type: 'monospermic' | 'undivided'

    /**
     * Shape of epicarp.
     */
    shape: 'straight' | 'undulate'

    /**
     * Prickles in epicarp.
    */
    prickles: Prickles

    /**
     * Trichomes in epicarp.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of Epicarp.
     */
    constructor() {
        super()
    }
}