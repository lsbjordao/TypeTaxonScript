import { Sources } from '../../Sources'

export class StellateLepidote extends Sources {
    /**
     * Are stellate-lepidote trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Stellate-lepidote trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Density of stellate-lepidote trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of Stellate-lepidote trichome.
     */
    constructor() {
        super()
    }
}