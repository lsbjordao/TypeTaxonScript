// Import annotation classes
import { Sources } from "./Sources"

// Import methods
import { _setLength, _setLengthMinMax } from './methods/length'

export class Prickles extends Sources {
    /**
     * Are prickles present (armed structure), absent (unarmed structure), or both (armed or unarmerd)?
     *
     * @remarks
     * If `absent`, the `length` should be `null`.
     */
    are: 'present' | 'absent' | 'present or absent'

    /**
     * Prickles length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: {
        value?: number | null
        min?: number | null
        max?: number | null
    } | null

    /**
     * Orientation of prickles.
     */
    orientation: 'decurved' | 'recurved' | 'straight'

    /**
     * Prickles frequency.
     */
    frequency: 'sparsely armed' | 'serially armed'

    /**
     * Prickles persistance.
     */
    persistance: 'persistent' | 'caducous'

    /**
     * Creates an instance of prickles.
     */
    constructor() {
        super()
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
        _setLengthMinMax(min, max, this)
    }

    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLength(value: number | null): void {
        _setLength(value, this)
    }
}