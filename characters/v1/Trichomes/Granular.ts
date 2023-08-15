import { Sources } from "../Sources";

export class Granular extends Sources {
    /**
     * Are granular trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent';

    /**
     * Creates an instance of Granular trichome.
     */
    constructor() {
        super();
    }
}