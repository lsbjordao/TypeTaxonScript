import { Sources } from '../../Sources'

export class StellateStalked extends Sources {
    /**
     * Are stellate-stalked trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Stellate-stalked trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Creates an instance of Stellate-stalked trichome.
     */
    constructor() {
        super()
    }
}