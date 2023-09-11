import { Trichomes } from '../Trichomes';
import { Prickles } from '../Prickles';
import { Sources } from "../Sources";

import { _setLength, _setLengthMinMax } from '../methods/sizes';

export class Petiole extends Sources {
    /**
     * Petiole can be present or absent.
     *
     * @remarks
     * If `present` is `false`, the `length` should be `null`.
     */
    present: true | false;

    /**
     * Petiole length in milimeters (mm).
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
     * Transversal shape of petiole.
     *
     * @remarks
     * The shape of petiole when viewed from a cross-sectional perspective.
     */
    transversalShape:
    '4-ribbed' |
    '5-ribbed' |
    '4-gonal' |
    'cylindric' |
    (
        '4-ribbed' |
        '5-ribbed' |
        '4-gonal' |
        'cylindric'
    )[]

    /**
     * Flattening of petiole.
     */
    flattening:
        'not dorsiventrally flattened' |
        'slightly dorsiventrally flattened' |
        'dorsiventrally flattened' |
        (
            'not dorsiventrally flattened' |
            'slightly dorsiventrally flattened' |
            'dorsiventrally flattened'
        )[]

    /**
     * Prickles in petiole.
    */
    prickles: Prickles;

    /**
     * Trichomes in petiole.
     */
    trichomes: Trichomes;

    /**
     * Persistance of petiole.
     */
    persistance: 'persistent' | 'caducous';

    /**
     * Creates an instance of Petiole.
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