import { Sources } from "../Sources";

export class Dendritic extends Sources {
    /**
     * Dendritic trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

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