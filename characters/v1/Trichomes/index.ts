import { Filiform } from "./Filiform";
import { Setiform } from "./Setiform";
import { Stellate } from "./Stellate";
import { Capitate } from "./Capitate";
import { Sources } from "../Sources";

class Trichomes extends Sources {
    /**
     * Filiform trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    filiform: Filiform;

    /**
     * Setiform trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    setiform: Setiform;

    /**
     * Stellate trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    stellate: Stellate;

    /**
     * Capitate trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    capitate: Capitate;

    /**
     * Creates an instance of trichome.
     */
    constructor() {
        super();
    }
}

export {
    Trichomes,
    Filiform,
    Setiform,
    Stellate,
    Capitate
}