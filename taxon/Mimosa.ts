import { Flower, Fruit, Leaf, Prickles, Source, Trichomes } from "../character/v1";



export class Mimosa {
    /**
     * Species of *Mimosa*
     */
    specificEpithet: string;

    /**
     * Habit of *Mimosa*
     */
    habit: 'tree' | 'shrub' | 'subshrub' | 'herb';

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

    /**
     * Source of *Mimosa*
     */
    sources: Source[];

    /**
     * Creates an instance of *Mimosa* species.
     */
    constructor() {
        this.sources = [];
    }
}