import { Trichomes } from './Trichomes'
import { Prickles } from './Prickles'
import { Sources } from './Sources'

export class Stems extends Sources {
    /**
     * Stems length in meters (m).
     */
    length: number

    /**
     * Shape of stems.
     */
    shape: 'cylindric' | '3-gonal' | '4-gonal' | '5-gonal'

    /**
     * Orientation of stems (single state).
     */
    orientation: 'erect' | 'ascending' | 'scandent' | 'decumbent' | 'procumbent' |
        ('erect' | 'ascending' | 'scandent' | 'decumbent' | 'procumbent')[]
        
    /**
     * Prickles in stems.
    */
    prickles: Prickles

    /**
     * Trichomes in stems.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of Stems.
     */
    constructor() {
        super()
    }
}
