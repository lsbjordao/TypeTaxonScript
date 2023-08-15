/**
 * Sets a single value for length.
 *
 * @param value - The length value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setLength(value: number | null, that: any): void {
    if (that.present === false && value !== null) {
        throw new Error("Cannot set length when present is false");
    }

    that.length = { ...that.length, value };
}

/**
 * Sets the length values, considering the value of `present`.
 *
 * @param min - The minimum length value in milimeters (mm).
 * @param max - The maximum length value in milimeters (mm).
 * @throws Error if `present` is `false` and either `min` or `max` is not `null`.
 * @throws Error if `min` is greater than or equal to `max`.
 */
function _setLengthMinMax(min: number, max: number, that: any): void {
    if (that.present === false && (min !== null || max !== null)) {
        throw new Error("Cannot set length when present is false");
    }

    if (min >= max) {
        throw new Error("Minimum length must be less than maximum length");
    }

    that.length = { ...that.length, min, max };
}

export {
    _setLength,
    _setLengthMinMax
}