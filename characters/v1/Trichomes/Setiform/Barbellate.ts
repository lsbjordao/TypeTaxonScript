import { Sources } from '../../Sources'

export class Barbellate extends Sources {
    /**
     * Are setiform-barbellate trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Setiform-barbellate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Creates an instance of Setiform-barbellate trichome.
     */
    constructor() {
        super()
    }
}