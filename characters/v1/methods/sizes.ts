/**
 * Sets a single value for length.
 *
 * @param value - The length value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setLength(value: number | null, that: any): void {
    if ((that.are === 'absent' || that.is === 'absent') && value !== null) {
        throw new Error("Cannot set length when structure is absent")
    }

    that.length = { ...that.length, value }
}

/**
 * Sets a single value for height.
 *
 * @param value - The height value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setHeight(value: number | null, that: any): void {
    if ((that.are === 'absent' || that.is === 'absent') && value !== null) {
        throw new Error("Cannot set height when structure is absent")
    }

    that.length = { ...that.length, value }
}

/**
 * Sets a single value for width.
 *
 * @param value - The width value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setWidth(value: number | null, that: any): void {
    if ((that.are === 'absent' || that.is === 'absent') && value !== null) {
        throw new Error("Cannot set width when structure is absent")
    }

    that.length = { ...that.length, value }
}

/**
 * Sets a single value for number of pairs.
 *
 * @param value - The number of pairs value (integer)
 */
function _setNumberOfPairs(value: number | null, that: any): void {
    that.numberOfPairs = { ...that.numberOfPairs, value }
}

/**
 * Sets a single value for rarely minimum.
 *
 * @param rarelyMin - The rarely minimum value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setLengthRarelyMin(rarelyMin: number, that: any): void {
    if ((that.are === 'absent' || that.is === 'absent') && rarelyMin !== null) {
        throw new Error("Cannot set rarely minimum when structure is absent")
    }

    that.length = { ...that.length, rarelyMin }
}

/**
 * Sets a single value for rarely maximum.
 *
 * @param rarelyMax - The rarely maximum value in milimeters (mm).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setLengthRarelyMax(rarelyMax: number, that: any): void {
    if ((that.are === 'absent' || that.is === 'absent') && rarelyMax !== null) {
        throw new Error("Cannot set rarely minimum when structure is absent")
    }

    that.length = { ...that.length, rarelyMax }
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
    if ((that.are === 'absent' || that.is === 'absent') && (min !== null || max !== null)) {
        throw new Error("Cannot set length when structure is absent")
    }

    if (min >= max) {
        throw new Error("Minimum length must be less than maximum length")
    }

    that.length = { ...that.length, min, max }
}

function _setHeightMinMax(min: number, max: number, that: any): void {
    if ((that.are === 'absent' || that.is === 'absent') && (min !== null || max !== null)) {
        throw new Error("Cannot set height when structure is absent")
    }

    if (min >= max) {
        throw new Error("Minimum height must be less than maximum height")
    }

    that.length = { ...that.length, min, max }
}

function _setWidthMinMax(min: number, max: number, that: any): void {
    if ((that.are === 'absent' || that.is === 'absent') && (min !== null || max !== null)) {
        throw new Error("Cannot set width when structure is absent")
    }

    if (min >= max) {
        throw new Error("Minimum width must be less than maximum width")
    }

    that.length = { ...that.length, min, max }
}

/**
 * Sets the number of pairs values.
 *
 * @param min - The minimum number of pairs value (integer).
 * @param max - The maximum number of pairs value (integer).
 */
function _setNumberOfPairsMinMax(min: number, max: number, that: any): void {
    that.numberOfPairs = { ...that.numberOfPairs, min, max }
}

/**
 * Sets a single value for rarely minimum.
 *
 * @param rarelyMin - The rarely minimum value (integer).
 */
function _setNumberOfPairsRarelyMin(rarelyMin: number, that: any): void {
    that.numberOfPairs = { ...that.numberOfPairs, rarelyMin }
}

/**
 * Sets a single value for rarely maximum.
 *
 * @param rarelyMax - The rarely maximum value (integer).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setNumberOfPairsRarelyMax(rarelyMax: number, that: any): void {
    that.numberOfPairs = { ...that.numberOfPairs, rarelyMax }
}

/**
 * Sets the number of seeds values.
 *
 * @param min - The minimum number of pairs value (integer).
 * @param max - The maximum number of pairs value (integer).
 */
function _setNumberOfSeedsMinMax(min: number, max: number, that: any): void {
    that.numberOfSeeds = { ...that.numberOfSeeds, min, max }
}

/**
 * Sets a single value for rarely minimum.
 *
 * @param rarelyMin - The rarely minimum value (integer).
 */
function _setNumberOfSeedsRarelyMin(rarelyMin: number, that: any): void {
    that.numberOfSeeds = { ...that.numberOfSeeds, rarelyMin }
}

/**
 * Sets a single value for rarely maximum.
 *
 * @param rarelyMax - The rarely maximum value (integer).
 * @throws Error if `present` is `false` and `value` is not `null`.
 */
function _setNumberOfSeedsRarelyMax(rarelyMax: number, that: any): void {
    that.numberOfSeeds = { ...that.numberOfSeeds, rarelyMax }
}

export {
    _setLength,
    _setLengthMinMax,
    _setLengthRarelyMin,
    _setLengthRarelyMax,
    _setHeight,
    _setHeightMinMax,
    _setWidth,
    _setWidthMinMax,
    _setNumberOfPairs,
    _setNumberOfPairsRarelyMin,
    _setNumberOfPairsMinMax,
    _setNumberOfPairsRarelyMax,
    _setNumberOfSeedsMinMax,
    _setNumberOfSeedsRarelyMin,
    _setNumberOfSeedsRarelyMax
}