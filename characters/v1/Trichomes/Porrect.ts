import { Sources } from "../Sources"

export class Porrect extends Sources {
    /**
     * Are porrect trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Are Porrect-stellate trichomes present?
     */
    stellate: true | false

    /**
     * Are Porrect-dendritic trichomes present?
     */
    dendritic: true | false

    /**
     * Porrect trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Creates an instance of Porrect trichome.
     */
    constructor() {
        super()
    }
}