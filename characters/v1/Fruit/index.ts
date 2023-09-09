// Import characters
import { Replum } from './Replum'
import { Epicarp } from './Epicarp'
import { Stipe } from './Stipe'

// Import methods
import { _setHeight, _setHeightMinMax, _setWidth, _setWidthMinMax, _setNumberOfSeedsMinMax } from '../methods/sizes'

// Import annotation classes
import { Sources } from "../Sources"

class Fruit extends Sources {
    /**
     * Type of fruit.
     */
    type: 'craspedium' | 'sacellum'

    /**
     * Type.
     */
    curvature: 'straight' | 'curved' | 'slightly curved'

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
    stipe: Stipe

    /**
     * Number of seeds.
     */
    numberOfSeeds: {
        value?: number | null
        rarelyMin?: number | null
        rarelyMax?: number | null
        min?: number | null
        max?: number | null
    } | null

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
     * Sets the number of seeds values.
     *
     * @param min - The minimum height value in milimeters (mm).
     * @param max - The maximum height value in milimeters (mm).
     */
    setNumberOfSeedsMinMax(min: number, max: number): void {
        _setNumberOfSeedsMinMax(min, max, this)
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
    Epicarp,
    Stipe
}