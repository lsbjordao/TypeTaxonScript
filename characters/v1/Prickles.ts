import { Sources } from "./Sources";

export class Prickles extends Sources {
    /**
     * Prickles can be present (armed structure) or absent (unarmed structure).
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Prickles length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Orientation of prickles.
     */
    orientation: 'decurved' | 'recurved' | 'straight';

    /**
     * Prickles frequency.
     */
    frequency: 'sparsely armed' | 'serially armed';

    /**
     * Prickles persistance.
     */
    persistance: 'persistent' | 'caducous';

    /**
     * Creates an instance of prickles.
     */
    constructor() {
        super();
    }
}