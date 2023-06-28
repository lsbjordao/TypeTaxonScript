"use strict";
exports.__esModule = true;
exports.Petiole = void 0;
var Petiole = /** @class */ (function () {
    /**
     * Creates an instance of Petiole.
     */
    function Petiole() {
        this.present = null;
        this.length = null;
    }
    /**
     * Sets the length value, considering the value of `present`.
     *
     * @param value - The length value in milimeters (mm).
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Petiole.prototype.setLength = function (value) {
        if (this.present === false && value !== null) {
            throw new Error("Cannot set length when present is false");
        }
        this.length = value;
    };
    return Petiole;
}());
exports.Petiole = Petiole;
