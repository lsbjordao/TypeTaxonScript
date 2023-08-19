// Import characters
import { SetiformBarbellate } from "./SetiformBarbellate";
import { SetiformGlochidiate } from "./SetiformGlochidiate";

// Import annotation classes
import { Sources } from "../../Sources"

class Setiform extends Sources {
    /**
     * Are setiform trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Are Setiform-barbellate trichomes present?
     */
    barbellate: SetiformBarbellate

    /**
     * Are Setiform-glochidiate trichomes present?
     */
    glochidiate: SetiformGlochidiate

    /**
     * Setiform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Orientation of trichomes.
     */
    orientation:
        'patent' |
        'antrorse' |
        'retrorse' |
        'antrorse-appressed' |
        'retrorse-appressed' |
        ('patent' | 'antrorse' | 'retrorse' | 'antrorse-appressed' | 'retrorse-appressed')[]

    /**
     * Creates an instance of Setiform trichome.
     */
    constructor() {
        super()
    }
}

export {
    Setiform,
    SetiformBarbellate,
    SetiformGlochidiate
}