// Import characters
import { Spicule } from './Spicule'
import { Trichomes } from '../../../Trichomes'
import { Prickles } from '../../../Prickles'

// Import methods
import { _setLength, _setLengthRarelyMin, _setLengthRarelyMax, _setLengthMinMax } from '../../../methods/sizes'

// Import annotation classes
import { Sources } from "../../../Sources"

class Rachis extends Sources {
    /**
     * Rachis length in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    length: {
        value?: number | null
        rarelyMin?: number | null
        rarelyMax?: number | null
        min?: number | null
        max?: number | null
    } | null

    /**
     * Spicule of rachis
     *
     * @remarks
     * 
     */
    spicule: Spicule

    /**
     * Prickles in rachis.
     */
    prickles: Prickles

    /**
     * Trichomes in rachis.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of Rachis.
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
    setLength(value: number): void {
        _setLength(value, this)
    }

    /**
     * Sets a single value for rarely minimum.
     *
     * @param rarelyMin - The rarely minimum value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLengthRarelyMin(rarelyMin: number): void {
        _setLengthRarelyMin(rarelyMin, this)
    }

    /**
     * Sets a single value for rarely maximum.
     *
     * @param rarelyMax - The rarely maximum value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLengthRarelyMax(rarelyMax: number): void {
        _setLengthRarelyMax(rarelyMax, this)
    }
}

export { Rachis }