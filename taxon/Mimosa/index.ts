// Import characters
import { Stems, Trichomes, Prickles, Stipule, Leaf, Flower, Fruit, Gall } from "../../characters/v1"

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
     * 
     * @kind decurved, recurved, straight.
     */
    prickles: Prickles

    /**
     * Stipule of *Mimosa*.
     */
    stipule: Stipule

    /**
     * Trichomes of *Mimosa*.
     * 
     * @kind filiform, setiform, stellate, dendritic, capitate-filiform, capitate-setiform.
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     * @source [Santos-Silva et al. (2013)](http://www.teste.com/)
     */
    trichomes: Trichomes

    /**
     * Leaf of *Mimosa*: bipinnate
     */
    leaf: Leaf

    /**
     * Flower of *Mimosa*
     */
    flower: Flower

    /**
     * Fruit of *Mimosa*
     */
    fruit: Fruit

    /**
     * Fruit of *Mimosa*
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