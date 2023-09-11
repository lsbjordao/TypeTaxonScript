import { Trichomes } from '../../../Trichomes';
import { Prickles } from '../../../Prickles';
import { Sources } from "../../../Sources";

import { _setLength, _setLengthMinMax } from '../../../methods/sizes';

export class Spicule extends Sources {
    /**
     * Are spicule 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    is: 'present' | 'absent' | 'present or absent' | 'often absent' | 'often present'

    /**
     * Petiole length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: {
        value?: number | null;
        min?: number | null;
        max?: number | null;
    } | null;

    /**
     * Shape of spicule.
     */
    shape: 'linear' | 'linear-subulate' | 'deltate' | 'spinniform'

    /**
     * Trichomes in spicule.
     */
    trichomes: Trichomes;

    /**
     * Creates an instance of Petiole.
     */
    constructor() {
        super();
    }

    /**
     * Sets the length values, considering the value of `present`.
     *
     * @param min - The minimum length value in milimeters (mm).
     * @param max - The maximum length value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    setLengthMinMax(min: number, max: number): void {
        _setLengthMinMax(min, max, this);
    }

    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLength(value: number | null): void {
        _setLength(value, this);
    }
}