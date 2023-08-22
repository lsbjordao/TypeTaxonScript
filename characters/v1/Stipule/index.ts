// Import characters
import { Trichomes } from '../Trichomes'
import { Prickles } from '../Prickles'
import { AbaxialStipule } from './AbaxialStipule'
import { AdaxialStipule } from './AdaxialStipule'
import { MarginStipule } from './MarginStipule'

// Import methods
import { _setHeight, _setHeightMinMax, _setWidth, _setWidthMinMax } from '../methods/sizes'

// Import annotation classes
import { Sources } from "../Sources"

class Stipule extends Sources {
    /**
     * Stipule can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false

    /**
     * Leaflet length in milimeters (mm).
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
     * Leaflet height in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    height: {
        value?: number | null
        min?: number | null
        max?: number | null
    } | null

    /**
     * Leaflet width in milimeters (mm).
     *
     * @remarks
     * It should be `null` when `present` is `false`.
     */
    width: {
        value?: number | null
        min?: number | null
        max?: number | null
    } | null

    /**
     * Shape of Stipule.
     */
    shape: 'linear-subulate' | 'lanceolate' | 'deltate' | 'ovate' | 'spinniform'

    /**
     * Nervation of Stipule.
     */
    nervation: 
    '1-nerved' | 
    '3-nerved' | 
    'plurinerved' |
    ('1-nerved' | '3-nerved' | 'plurinerved')[]

    /**
     * Persistance of Stipule.
     */
    persistance: 'persistent' | 'caducous'

    /**
     * Prickles.
    */
    prickles: Prickles

    /**
     * Trichomes.
     */
    trichomes: Trichomes

    /**
     * Abaxial surface of stipule.
     */
    abaxial: AbaxialStipule

    /**
     * Adaxial surface of stipule.
     */
    adaxial: AdaxialStipule

    /**
     * Margin of stipule.
     */
    margin: MarginStipule
    
    /**
     * Creates an instance of Stipule.
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
        if (this.present === false && (min !== null || max !== null)) {
            throw new Error("Cannot set length when present is false")
        }

        if (min >= max) {
            throw new Error("Minimum length must be less than maximum length")
        }

        this.length = { ...this.length, min, max }
    }

    /**
     * Sets a single value for length.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setLength(value: number | null): void {
        if (this.present === false && value !== null) {
            throw new Error("Cannot set length when present is false")
        }

        this.length = { ...this.length, value }
    }

    /**
     * Sets the height values, considering the value of `present`.
     *
     * @param min - The minimum height value in milimeters (mm).
     * @param max - The maximum height value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    setHeightMinMax(min: number, max: number): void {
        _setHeightMinMax(min, max, this)
    }

    /**
     * Sets the width values, considering the value of `present`.
     *
     * @param min - The minimum width value in milimeters (mm).
     * @param max - The maximum width value in milimeters (mm).
     * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
     * @throws Error if `min` is greater than or equal to `max`.
     */
    setWidthMinMax(min: number, max: number): void {
        _setWidthMinMax(min, max, this)
    }

    /**
     * Sets a single value for height.
     *
     * @param value - The height value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setHeight(value: number | null): void {
        _setHeight(value, this)
    }

    /**
     * Sets a single value for width.
     *
     * @param value - The width value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    setWidth(value: number | null): void {
        _setWidth(value, this)
    }
}

export {
    Stipule,
    AbaxialStipule,
    AdaxialStipule,
    MarginStipule
}