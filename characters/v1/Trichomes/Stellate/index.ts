// Import characters
import { Subsessile } from './Subsessile'
import { Stalked } from './Stalked'
import { Lepidote } from './Lepidote'

// Import annotations classes
import { Sources } from '../../Sources'

class Stellate extends Sources {
    /**
     * Are stellate trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Are stellate-subsessile trichomes present?
     */
    subsessile: Subsessile

    /**
     * Are stellate-stalked trichomes present?
     */
    stalked: Stalked

    /**
     * Stellate-lepidote trichomes.
     */
    lepidote: Lepidote

    /**
     * Stellate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Creates an instance of Stellate trichome.
     */
    constructor() {
        super()
    }
}

export { 
    Stellate,
    Subsessile,
    Stalked,
    Lepidote
}