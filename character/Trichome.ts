import { Filiform } from "./Trichome/Filiform";
import { Setiform } from "./Trichome/Setiform";

import { Source } from "./Source";

export class Trichome {
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
     * Describe trichome.
     */
    constructor() {
        this.filiform = null;
        this.setiform = null;
        this.sources = [];
    }
}