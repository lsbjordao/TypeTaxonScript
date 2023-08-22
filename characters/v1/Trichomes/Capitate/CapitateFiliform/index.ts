import { VariantCordistipulae } from './VariantCordistipulae'
import { Sources } from '../../../Sources'

class CapitateFiliform extends Sources {
    /**
     * Are capitate-filiform trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Capitate-filiform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Density of capitate-filiform trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Variant Cordistipulae
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    variantCordistipulae: VariantCordistipulae

    /**
     * Creates an instance of capitate-filiform trichome.
     */
    constructor() {
        super()
    }
}

export {
    CapitateFiliform,
    VariantCordistipulae
}