// Import annotation classes
import { Sources } from "../../../Sources"
import { Trichomes } from "../../../Trichomes"

export class ApexLobes extends Sources {
    /**
     * Nervation of lobes.
     */
    nervation: '1-nerved'

    /**
     * Trichomes of apex of lobes.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of lobes of corolla.
     */
    constructor() {
        super()
    }
}