import { Sources } from '../../Sources'

export class Subsessile extends Sources {
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
     * Creates an instance of Stellate-subsessile trichome.
     */
    constructor() {
        super()
    }
}