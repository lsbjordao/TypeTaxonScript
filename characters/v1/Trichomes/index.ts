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
     * Fasciculate trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    fasciculate: Fasciculate;

    /**
     * Dendritic trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    dendritic: Dendritic;

    /**
     * Porrect trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    porrect: Porrect;

    /**
     * Verruciform trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    verruciform: Verruciform;

    /**
     * Lepidote trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    lepidote: Lepidote;

    /**
     * Peltate trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    peltate: Peltate;

    /**
     * Granular trichome.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     */
    granular: Granular;

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
    Fasciculate,
    Dendritic,
    Porrect,
    Verruciform,
    Lepidote,
    Peltate,
    Granular,
    Capitate
}