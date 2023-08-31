import { Trichomes } from '../Trichomes'
import { Prickles } from '../Prickles'
import { Sources } from "../Sources"

export class Epicarp extends Sources {
    /**
     * Type of epicarp.
     */
    type: 'monospermic' | 'undivided'

    /**
     * Margin of epicarp.
     * @remarks
     * The epicarp margin can be: 'straight' or 'undulate':
     * - **straight**: The epicarp margin is straight and not undulated.
     * - **undulate**: The epicarp margin is undulated and not straight.
     */
    margin: 'straight' | 'undulate'

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