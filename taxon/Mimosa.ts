import { Leaf } from '../character/Leaf/Leaf';
import { Flower } from '../character/Flower/Flower';

export class Mimosa {
    /**
     * Habit
     */
    habit: 'tree' | 'shrub' | 'subshrub' | null;

    /**
     * Bipinnate leaf
     */
    leaf: Leaf | null;

    /**
     * Flower
     */
    flower: Flower | null;

    /**
     * Describe a species of Mimosa
     */
    constructor() {
        this.habit = null;
        this.leaf = null;
        this.flower = null;
    }
}