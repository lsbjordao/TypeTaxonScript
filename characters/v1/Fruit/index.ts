// Import characters
import { Replum } from "./Replum"
import { Epicarp } from "./Epicarp"

// Import methods
import { _setHeight, _setHeightMinMax, _setWidth, _setWidthMinMax } from '../methods/sizes'

// Import annotation classes
import { Sources } from "../Sources"

class Fruit extends Sources {
    /**
     * Type.
     */
    type: 'craspedium' | 'sacellum'

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
     * Shape of fruit.
     */
    shape: 'oblong' | 'linear'

    /**
     * Stipe of fruit.
     */
    stipe: 'stipitate' | 'sessile'

    /**
     * Number of seeds.
     */
    numberOfSeeds: number | string

    /**
     * Replum.
     */
    replum: Replum

    /**
     * Epicarp.
     */
    epicarp: Epicarp

    /**
     * Creates an instance of Fruit.
     */
    constructor() {
        super()
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
}

export{
    Fruit,
    Replum,
    Epicarp
}