import { Sources } from "../Sources"

export class Fasciculate extends Sources {
    /**
     * Are fasciculate trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Fasciculate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Creates an instance of Fasciculate trichome.
     */
    constructor() {
        super()
    }
}