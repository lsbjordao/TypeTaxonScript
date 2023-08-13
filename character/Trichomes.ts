import { Filiform } from "./Trichomes/Filiform";
import { Setiform } from "./Trichomes/Setiform";

export class Trichomes {
    /**
     * Filiform trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    filiform: Filiform | null;

    /**
     * Setiform trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    setiform: Setiform | null;

    /**
     * Describe trichomes.
     */
    constructor() {
        this.filiform = null;
        this.setiform = null;
    }
}