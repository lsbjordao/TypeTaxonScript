import { Leaf } from '../characters/Leaf';
import { Paraphillidia } from '../characters/Paraphillidia';

export class Mimosa {

    /**
     * Habit
     */
    habit: 'tree' | 'shrub' | null;

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