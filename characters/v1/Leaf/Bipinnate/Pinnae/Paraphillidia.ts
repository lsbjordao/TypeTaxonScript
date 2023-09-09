// Import methods
import { _setLength, _setLengthMinMax } from '../../../methods/sizes';

// Import annotation classes
import { Sources } from "../../../Sources";

export class Paraphillidia extends Sources {
    /**
     * Is paraphillidia pair 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * If are `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Paraphillidia length in milimeters (mm).
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
     * Pair length.
     */
    pairLength: 'unequal' | 'equal'

    /**
     * Shape of paraphillidia.
     */
    shape:
        'lanceolate' |
        'linear' |
        (
            'lanceolate' |
            'linear'
        )[]

    /**
     * Creates an instance of Paraphillidia.
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
