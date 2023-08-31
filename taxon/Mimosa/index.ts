// Import characters
import {
    Stems,
    Trichomes,
    Prickles,
    Stipule,
    Leaf,
    Inflorescence,
    Flower,
    Androecium,
    Pollen,
    Ginoecium,
    Fruit,
    Seed,
    Gall
} from "../../characters/v1"

// Import annotation classes
import { Sources } from "../../characters/v1/Sources"
import { DescriptionAuthorship } from "../../characters/v1/descriptionAuthorship"

export class Mimosa extends Sources {
    /**
     * Species of *Mimosa*
     */
    specificEpithet: string

    /**
     * Habit of *Mimosa*
     */
    habit: 'tree' | 'shrub' | 'subshrub' | 'herb'

    /**
     * Stem of *Mimosa*.
     */
    stems: Stems

    /**
     * Prickles of *Mimosa*.
     */
    prickles: Prickles

    /**
     * Stipule of *Mimosa*.
     */
    stipule: Stipule

    /**
     * Trichomes of *Mimosa*.
     * 
     * @remarks
     * Trichomes in *Mimosa* can be classified in the following types:
     * - **filiform**
     * - **setiform**
     * - **stellate**
     * - **dendritic**
     * - **porrect**
     * - **fasciculate**
     * - **verruciform**
     * - **lepidote**
     * - **granular**
     * - **capitate-filiform**
     * - **capitate-setiform**
     * 
     * @source [Jordão et al. (2020)](https://doi.org/10.1016/j.flora.2020.151702)
     * @source [Santos-Silva et al. (2013)](https://doi.org/10.11646/phytotaxa.119.1.1)
     */
    trichomes: Trichomes

    /**
     * Leaf of *Mimosa*: bipinnate
     */
    leaf: Leaf

    /**
     * Inflorescence of *Mimosa*
     */
    inflorescence: Inflorescence

    /**
     * Flower of *Mimosa*
     */
    flower: Flower

    /**
     * Androecium of *Mimosa*
     */
    androecium: Androecium

    /**
     * Pollen of *Mimosa*
     */
    pollen: Pollen

    /**
     * Ginoecium of *Mimosa*
     */
    ginoecium: Ginoecium

    /**
     * Fruit of *Mimosa*
     */
    fruit: Fruit

    /**
     * Seed of *Mimosa*
     */
    seed: Seed

    /**
     * Gall in *Mimosa*
     */
    gall: Gall

    descriptionAuthorship: DescriptionAuthorship

    /**
     * Creates an instance of *Mimosa* species.
     */
    constructor() {
        super()
    }
}