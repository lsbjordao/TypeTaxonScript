// Import characters
import { Trichomes } from '../Trichomes'
import { Sources } from "../Sources"

// Import methods
import { _setLength, _setLengthMinMax } from '../methods/length'

export class Corolla extends Sources {
    /**
     * Calyx can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false

    /**
     * Number of petals.
     */
    numPepals: number

    /**
     * Corolla length in milimeters (mm).
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
     * Corolla shape.
     */
    shape: "campanulate" | "turbinate"

    /**
     * Trichomes of corolla.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of Corolla.
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