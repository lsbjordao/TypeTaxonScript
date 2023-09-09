// Import methods
import { _setLength, _setLengthMinMax } from "../../methods/sizes"

// Import annotation classes
import { Sources } from "../../Sources"

export class Stipe extends Sources {
    /**
     * Is stipe of fruits 'present', 'absent', or 'present or absent'?
     * 
     * @remarks
     * Fruits can be:
     * - **present**: fruit stipitate.
     * - **absent**: fruit sessile.
     * - **present or absent**: fruit stipitate or sessile.
     */
    is: 'present' | 'absent' | 'present or absent'

    /**
     * Stipe length in milimeters (mm).
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
     * Creates an instance of stipe of fruit.
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