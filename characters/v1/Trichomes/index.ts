import { Filiform } from "./Filiform";
import { Setiform } from "./Setiform";
import { Stellate } from "./Stellate";
import { Fasciculate } from "./Fasciculate";
import { Dendritic } from "./Dendritic";
import { Porrect } from "./Porrect";
import { Verruciform } from "./Verruciform";
import { Lepidote } from "./Lepidote";
import { Peltate } from "./Peltate";
import { Granular } from "./Granular";
import { Capitate } from "./Capitate";
import { Sources } from "../Sources";

class Trichomes extends Sources {
    /**
     * Filiform trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    filiform: Filiform;

    /**
     * Setiform trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    setiform: Setiform;

    /**
     * Stellate trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    stellate: Stellate;

    /**
     * Fasciculate trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    fasciculate: Fasciculate;

    /**
     * Dendritic trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    dendritic: Dendritic;

    /**
     * Porrect trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    porrect: Porrect;

    /**
     * Verruciform trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    verruciform: Verruciform;

    /**
     * Lepidote trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    lepidote: Lepidote;

    /**
     * Peltate trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    peltate: Peltate;

    /**
     * Granular trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    granular: Granular;

    /**
     * Capitate trichomes.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    capitate: Capitate;

    /**
     * Creates an instance of trichomes.
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
    Fasciculate,
    Dendritic,
    Porrect,
    Verruciform,
    Lepidote,
    Peltate,
    Granular,
    Capitate
}