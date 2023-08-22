import { Sources } from "../Sources"

export class Lepidote extends Sources {
    /**
     * Are lepidote trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Lepidote trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Density of lepidote trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of Lepidote trichome.
     */
    constructor() {
        super()
    }
}