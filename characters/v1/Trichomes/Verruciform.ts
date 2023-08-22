import { Sources } from "../Sources"

export class Verruciform extends Sources {
    /**
     * Are verruciform trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Verruciform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Density of verruciform trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of Verruciform trichome.
     */
    constructor() {
        super()
    }
}