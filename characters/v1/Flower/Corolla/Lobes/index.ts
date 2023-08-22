// Import characters
import { ApexLobes } from './ApexLobes'

// Import annotation classes
import { Sources } from "../../../Sources"

class Lobes extends Sources {
    /**
     * Nervation of lobes.
     */
    nervation: '1-nerved'

    /**
     * Apex of lobes.
     */
    apex: ApexLobes

    /**
     * Creates an instance of lobes of corolla.
     */
    constructor() {
        super()
    }
}

export {
    Lobes,
    ApexLobes
}