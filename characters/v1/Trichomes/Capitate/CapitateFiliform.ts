import { Sources } from '../../Sources'

export class CapitateFiliform extends Sources {
    /**
     * Are capitate-filiform trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Capitate-filiform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number

    /**
     * Creates an instance of capitate-filiform trichome.
     */
    constructor() {
        super()
    }
}