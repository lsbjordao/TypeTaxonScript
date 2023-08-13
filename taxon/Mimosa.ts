import { Trichomes } from '../character/Trichomes';
import { Leaf } from '../character/Leaf';
import { Flower } from '../character/Flower';
import { Fruit } from '../character/Fruit';
import { Source } from '../character/Source';

export class Mimosa {
    /**
     * Habit
     */
    habit: 'tree' | 'shrub' | 'subshrub' | 'herb' | null;

    /**
     * Trichomes
     */
    trichomes: Trichomes | null;

    /**
     * Bipinnate leaf
     */
    leaf: Leaf | null;

    /**
     * Flower
     */
    flower: Flower | null;

    /**
     * Fruit
     */
    fruit: Fruit | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Describe a species of Mimosa
     */
    constructor() {
        this.sources = [];
    }
}