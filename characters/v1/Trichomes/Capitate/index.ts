import { Sources } from "../../Sources"
import { CapitateFiliform } from "./CapitateFiliform"
import { CapitateSetiform } from "./CapitateSetiform"

class Capitate extends Sources {
    /**
     * Are capitate trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Are capitate-filiform trichomes present?
     */
    filiform: CapitateFiliform

    /**
     * Are capitate-setiform trichomes present?
     */
    setiform: CapitateSetiform

    /**
     * Capitate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null

    /**
     * Creates an instance of Capitate trichome.
     */
    constructor() {
        super()
    }
}

export {
    Capitate,
    CapitateSetiform,
    CapitateFiliform    
}