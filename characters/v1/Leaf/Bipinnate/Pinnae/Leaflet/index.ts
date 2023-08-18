// Import characters
import { Trichomes } from '../../../../Trichomes'
import { Abaxial } from './Abaxial'
import { Adaxial } from './Adaxial'
import { Margin } from './Margin'

// Import methods
import { _setHeight, _setHeightMinMax, _setWidth, _setWidthMinMax } from '../../../../methods/length'

// Import annotation classes
import { Sources } from "../../../../Sources";

class Leaflet extends Sources {
    /**
     * Number of leaflet pair(s).
     */
    numberOfPairs: number;

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
     * Abaxial surface of leaflet.
     */
    abaxial: Abaxial

    /**
     * Adaxial surface of leaflet.
     */
    adaxial: Adaxial

    /**
     * Margin of leaflet.
     */
    margin: Margin

    /**
     * Trichomes in leaflet.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of Leaflet.
     */
    constructor() {
        super();
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
    Leaflet,
    Abaxial,
    Adaxial,
    Margin
}