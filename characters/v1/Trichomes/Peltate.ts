import { Sources } from "../Sources";

export class Peltate extends Sources {
    /**
     * Peltate trichomes can be present or absent.
     *
     * @remarks
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Peltate trichomes length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Peltate trichome.
     */
    constructor() {
        super();
    }
}