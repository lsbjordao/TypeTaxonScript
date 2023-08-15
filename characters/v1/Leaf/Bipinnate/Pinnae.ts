import { Sources } from "../../Sources";

export class Pinnae extends Sources {
    /**
     * Number of pinnae pair(s).
     */
    number: number;

    /**
     * Pinna length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Pinna.
     */
    constructor() {
        super();
    }
}
