import { Sources } from "../Sources";

export class Dendritic extends Sources {
    /**
     * Are dendritic trichomes 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent';

    /**
     * Dendritic trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Dendritic trichome.
     */
    constructor() {
        super();
    }
}