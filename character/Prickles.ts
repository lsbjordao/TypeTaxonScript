export class Prickles {
    /**
     * Prickles can be present or absent.
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
     * Source.
     */
    sources: Source[];

    /**
     * Creates an instance of prickles.
     */
    constructor() {
        this.sources = [];
    }
}

import { Source } from "./Source";