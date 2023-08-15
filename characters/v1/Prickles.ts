import { Sources } from "./Sources";

export class Prickles extends Sources {
    /**
     * Are prickles present (armed structure)?
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | [true, false];

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
    orientation: 'decurved' | 'recurved' | 'straight' | string[];

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