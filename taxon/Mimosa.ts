import { Trichomes } from '../character/Trichomes';
import { Leaf } from '../character/Leaf';
import { Flower } from '../character/Flower';
import { Fruit } from '../character/Fruit';

export class Mimosa {
    /**
     * Habit
     */
    habit: 'tree' | 'shrub' | 'subshrub' | null;

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
     * Describe a species of Mimosa
     */
    constructor() {
        this.habit = null;
        this.trichomes = null;
        this.leaf = null;
        this.flower = null;
    }
}