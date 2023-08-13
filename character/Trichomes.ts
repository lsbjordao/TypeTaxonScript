import { Filiform } from "./Trichomes/Filiform";
import { Setiform } from "./Trichomes/Setiform";

export class Trichomes {
    /**
     * Filiform trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    filiform: Filiform | null;

    /**
     * Setiform trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    setiform: Setiform | null;

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