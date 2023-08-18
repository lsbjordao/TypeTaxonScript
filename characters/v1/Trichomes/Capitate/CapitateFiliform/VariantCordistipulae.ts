import { Sources } from '../../../Sources'

export class VariantCordistipulae extends Sources {
    /**
     * Are capitate-filiform variant Cordistipulae trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * capitate-filiform variant Cordistipulae trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Creates an instance of capitate-setiform trichome.
     */
    constructor() {
        super()
    }
}