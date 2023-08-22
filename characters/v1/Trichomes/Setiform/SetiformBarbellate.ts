import { Sources } from '../../Sources'

export class SetiformBarbellate extends Sources {
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
     * Density of setiform-barbellate trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of setiform-barbellate trichomes.
     */
    constructor() {
        super()
    }
}