import { Trichomes } from '../character/Trichomes';
import { Leaf } from '../character/Leaf';
import { Flower } from '../character/Flower';
import { Fruit } from '../character/Fruit';
import { Source } from '../character/Source';

export class Mimosa {
    /**
     * Species of *Mimosa*
     */
    specificEpithet: string | null;

    /**
     * Habit of *Mimosa*
     */
    habit: 'tree' | 'shrub' | 'subshrub' | 'herb' | null;

    /**
     * Trichomes of *Mimosa*
     * 
     * @source [Jordão et al. (2020)](http://www.teste.com/)
     * @source [Santos-Silva et al. (2013)](http://www.teste.com/)
     */
    trichomes: Trichomes | null;

    /**
     * Leaf of *Mimosa*
     */
    leaf: Leaf | null;

    /**
     * Flower of *Mimosa*
     */
    flower: Flower | null;

    /**
     * Fruit of *Mimosa*
     */
    fruit: Fruit | null;

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