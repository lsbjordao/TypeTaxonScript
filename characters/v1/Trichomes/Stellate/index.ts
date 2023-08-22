// Import characters
import { StellateSubsessile } from './StellateSubsessile'
import { StellateStalked } from './StellateStalked'
import { StellateLepidote } from './StellateLepidote'

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
     * Stellate-subsessile trichomes.
     */
    subsessile: StellateSubsessile

    /**
     * Stellate-stalked trichomes.
     */
    stalked: StellateStalked

    /**
     * Stellate-lepidote trichomes.
     */
    lepidote: StellateLepidote

    /**
     * Stellate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Density of stellate trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of Stellate trichome.
     */
    constructor() {
        super()
    }
}

export { 
    Stellate,
    StellateSubsessile,
    StellateStalked,
    StellateLepidote
}