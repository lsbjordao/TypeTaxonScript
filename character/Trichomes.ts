import { Filiform } from "./Trichomes/Filiform";
import { Setiform } from "./Trichomes/Setiform";
import { Stellate } from "./Trichomes/Stellate";
import { Capitate } from "./Trichomes/Capitate";

export class Trichomes {
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
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of trichome.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "./Source";