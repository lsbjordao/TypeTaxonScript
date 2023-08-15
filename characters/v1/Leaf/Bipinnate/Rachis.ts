import { Trichomes } from '../../Trichomes';
import { Prickles } from '../../Prickles';
import { Sources } from "../../Sources";

export class Rachis extends Sources {
    /**
     * Rachis can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Rachis length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: number | null;

    /**
     * Prickles in rachis.
    */
    prickles: Prickles;

    /**
     * Trichomes in rachis.
     */
    trichomes: Trichomes;

    /**
     * Creates an instance of Rachis.
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
