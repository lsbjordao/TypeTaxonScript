import { Sources } from "../Sources";

export class Verruciform extends Sources {
    /**
     * Verruciform trichomes can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Verruciform trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Verruciform trichome.
     */
    constructor() {
        super();
    }
}