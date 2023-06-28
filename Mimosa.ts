import { Leaf } from './Leaf';

export class Mimosa {

    /**
     * Habit
     */
    Habit: 'tree' | 'shrub' | null;

    /**
     * Leaf
     */
    Leaf: Leaf | null;

    /**
     * Describe a species of Mimosa
     */
    constructor() {
        this.Habit = null;
        this.Leaf = null;
    }
}