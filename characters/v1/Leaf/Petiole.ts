import { Trichomes } from '../Trichomes';
import { Prickles } from '../Prickles';
import { Sources } from "../Sources";

export class Petiole extends Sources {
    /**
     * Petiole can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Petiole length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Prickles in petiole.
    */
    prickles: Prickles;

    /**
     * Trichomes in petiole.
     */
    trichomes: Trichomes;

    /**
     * Persistance of petiole.
     */
    persistance: 'persistent' | 'caducous';

    /**
     * Creates an instance of Petiole.
     */
    constructor() {
        super();
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