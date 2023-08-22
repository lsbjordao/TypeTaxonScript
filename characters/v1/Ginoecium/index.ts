// Import characters
import { Ovary } from './Ovary'

// Import annotation classes
import { Sources } from "../Sources"

class Ginoecium extends Sources {
    /**
     * Ovary of ginoecium.
     */
    ovary: Ovary

    /**
     * Creates an instance of ginoecium.
     */
    constructor() {
        super()
    }
}

export {
    Ginoecium,
    Ovary
}