import { Sources } from '../../Sources'

export class CapitateSetiform extends Sources {
    /**
     * Are capitate-setiform trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Capitate-setiform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Density of capitate-setiform trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of capitate-setiform trichome.
     */
    constructor() {
        super()
    }
}