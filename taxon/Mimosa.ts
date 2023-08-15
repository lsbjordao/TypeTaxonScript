import { Stems, Leaf, Trichomes, Prickles, Flower, Fruit } from "../characters/v1";
import { Sources } from "../characters/v1/Sources";
import { DescriptionAuthorship } from "../characters/v1/descriptionAuthorship";

export class Mimosa extends Sources {
    /**
     * Species of *Mimosa*
     */
    specificEpithet: string;

    /**
     * Habit of *Mimosa*
     */
    habit: 'tree' | 'shrub' | 'subshrub' | 'herb';

    /**
     * Stem of *Mimosa*.
     */
    stems: Stems;

    /**
     * Prickles of *Mimosa*.
     * 
     * @kind decurved, recurved, straight.
     */
    prickles: Prickles;

    /**
     * Trichomes of *Mimosa*.
     * 
     * @kind filiform, setiform, stellate, dendritic, capitate-filiform, capitate-setiform.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     * @source [Santos-Silva et al. (2013)](http://www.teste.com/)
     */
    trichomes: Trichomes;

    /**
     * Leaf of *Mimosa*: bipinnate
     */
    leaf: Leaf;

    /**
     * Flower of *Mimosa*
     */
    flower: Flower;

    /**
     * Fruit of *Mimosa*
     */
    fruit: Fruit;

    DescriptionAuthorship: DescriptionAuthorship;

    /**
     * Creates an instance of *Mimosa* species.
     */
    constructor() {
        super();
    }
}