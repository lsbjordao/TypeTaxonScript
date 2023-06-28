"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paraphillidia = void 0;
var Paraphillidia = /** @class */ (function () {
    /**
     * Creates an instance of Paraphillidia.
     */
    function Paraphillidia() {
        this.present = null;
        this.length = null;
    }
    /**
     * Sets the length value, considering the value of `present`.
     *
     * @param value - The length value.
     * @throws Error if `present` is `false` and `value` is not `null`.
     */
    Paraphillidia.prototype.setLength = function (value) {
        if (this.present === false && value !== null) {
            throw new Error("Cannot set length when present is false");
        }
        this.length = value;
    };
    return Paraphillidia;
}());
exports.Paraphillidia = Paraphillidia;
