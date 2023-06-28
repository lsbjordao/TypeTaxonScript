"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimosa = void 0;
var Mimosa = /** @class */ (function () {
    /**
     * Describe a species of Mimosa
     */
    function Mimosa() {
        this.Habit = null;
        this.Leaf = null;
    }
    Mimosa.prototype.toString = function () {
        return "{ Habit: '".concat(this.Habit, "', Leaf: ").concat(JSON.stringify(this.Leaf), " }");
    };
    return Mimosa;
}());
exports.Mimosa = Mimosa;
