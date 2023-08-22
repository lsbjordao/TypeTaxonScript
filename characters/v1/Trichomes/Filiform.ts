import { Sources } from "../Sources"

export class Filiform extends Sources {
    /**
     * Are filiform trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Filiform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Number of cells of filiform trichomes
     */
    numberOfCells: 'unicelullar' | 'multicelullar' | 'unicelullar and multicelullar' | 'unicelullar or multicelullar'

    /**
     * Orientation of filiform trichomes.
     */
    orientation:
        'patent' |
        'antrorse' |
        'retrorse' |
        'antrorse-appressed' |
        'retrorse-appressed' |
        ('patent' | 'antrorse' | 'retrorse' | 'antrorse-appressed' | 'retrorse-appressed')[]

    /**
     * Density of filiform trichomes.
     */
    density: 'sparsely' | 'densely'

    /**
     * Creates an instance of filiform trichome.
     */
    constructor() {
        super()
    }
}