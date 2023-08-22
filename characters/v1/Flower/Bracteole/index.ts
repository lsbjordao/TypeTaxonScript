import { AdaxialBracteole } from './AdaxialBracteole'
import { AbaxialBracteole } from './AbaxialBracteole'
import { MarginBracteole } from './MarginBracteole'
import { ApexBracteole } from './ApexBracteole'
import { Trichomes } from '../../Trichomes'
import { Sources } from "../../Sources"

import { _setLength, _setLengthMinMax } from '../../methods/sizes'

class Bracteole extends Sources {
    /**
     * Bracteole length in milimeters (mm).
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
     * Shape of bracteole.
     */
    shape: 
    'oblanceolate' | 
    'linear' |
    ('oblanceolate' | 'linear')[]

    /**
     * Adaxial surface of bracteole.
     */
    adaxial: AdaxialBracteole

    /**
     * Abaxial surface of bracteole.
     */
    abaxial: AbaxialBracteole

    /**
     * Margin of bracteole.
     */
    margin: MarginBracteole

    /**
     * Apex of bracteole.
     */
    apex: ApexBracteole

    /**
     * Trichomes of bracteole.
     */
    trichomes: Trichomes

    /**
     * Creates an instance of bracteole.
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

export {
    Bracteole,
    AdaxialBracteole,
    AbaxialBracteole,
    MarginBracteole,
    ApexBracteole
}