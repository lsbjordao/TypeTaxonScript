import { Sources } from '../../Sources'

export class StellateSubsessile extends Sources {
    /**
     * Are stellate-subsessile trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Stellate-subsessile trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Density of stellate-subsessile trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of stellate-subsessile trichome.
     */
    constructor() {
        super()
    }
}