import { Sources } from '../../Sources'

export class SetiformGlochidiate extends Sources {
    /**
     * Are setiform-glochidiate trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Setiform-glochidiate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Creates an instance of Setiform-glochidiate trichome.
     */
    constructor() {
        super()
    }
}