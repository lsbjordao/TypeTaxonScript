import { Trichomes } from '../Trichomes'
import { Prickles } from '../Prickles'
import { Sources } from "../Sources"

export class Replum extends Sources {
    /**
     * Shape of replum.
     */
    shape: 'straight' | 'undulate'

    /**
     * Prickles in replum.
     */
    prickles: Prickles

    /**
     * Trichomes in replum.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of Replum.
     */
    constructor() {
        super()
    }
}