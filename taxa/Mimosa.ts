import { Leaf } from '../characters/Leaf';

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
     * Describe a species of Mimosa
     */
    constructor() {
        this.habit = null;
        this.leaf = null;
    }
}