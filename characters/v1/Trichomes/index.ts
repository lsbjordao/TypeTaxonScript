import { Filiform } from "./Filiform"
import { Setiform } from "./Setiform"
import { Stellate } from "./Stellate"
import { Fasciculate } from "./Fasciculate"
import { Dendritic } from "./Dendritic"
import { Porrect } from "./Porrect"
import { Verruciform } from "./Verruciform"
import { Lepidote } from "./Lepidote"
import { Peltate } from "./Peltate"
import { Granular } from "./Granular"
import { Capitate } from "./Capitate"
import { Sources } from "../Sources"

class Trichomes extends Sources {
    /**
     * Are trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Filiform trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    filiform: Filiform

    /**
     * Setiform trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    setiform: Setiform

    /**
     * Stellate trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    stellate: Stellate

    /**
     * Fasciculate trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    fasciculate: Fasciculate

    /**
     * Dendritic trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    dendritic: Dendritic

    /**
     * Porrect trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    porrect: Porrect

    /**
     * Verruciform trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    verruciform: Verruciform

    /**
     * Lepidote trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    lepidote: Lepidote

    /**
     * Peltate trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    peltate: Peltate

    /**
     * Granular trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    granular: Granular

    /**
     * Capitate trichomes.
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     */
    capitate: Capitate

    /**
     * Creates an instance of trichomes.
     */
    constructor() {
        super()
    }
}

export {
    Trichomes,
    Filiform,
    Setiform,
    Stellate,
    Fasciculate,
    Dendritic,
    Porrect,
    Verruciform,
    Lepidote,
    Peltate,
    Granular,
    Capitate
}