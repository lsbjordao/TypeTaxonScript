import { Sources } from "../../../Sources";

export class Leaflet extends Sources {
    /**
     * Number of leaflet pair(s).
     */
    numberOfPairs: number;

    /**
     * Leaflet length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Creates an instance of Leaflet.
     */
    constructor() {
        super();
    }
}
