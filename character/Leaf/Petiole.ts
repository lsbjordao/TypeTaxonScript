export class Petiole {
    /**
     * Petiole can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false | null;

    /**
     * Petiole length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Source
     */
    sources: Source[];

    /**
     * Creates an instance of Petiole.
     */
    constructor() {
        this.sources = [];
    }

    /**
     * Sets the length value, considering the value of `present`.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLength(value: number | null): void {
        if (this.present === false && value !== null) {
            throw new Error("Cannot set length when present is false");
        }
        this.length = value;
    }
}

import { Source } from "../../character/Source";