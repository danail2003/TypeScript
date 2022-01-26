"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Squares = /** @class */ (function () {
    function Squares(number) {
        this.number = number;
    }
    Object.defineProperty(Squares.prototype, "sumOfSquares", {
        get: function () {
            var sum = 0;
            for (var i = 1; i <= this.number; i++) {
                sum += (i * i);
            }
            return sum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Squares.prototype, "squareOfSum", {
        get: function () {
            var sum = 0;
            for (var i = 1; i <= this.number; i++) {
                sum += i;
            }
            return sum * sum;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Squares.prototype, "difference", {
        get: function () {
            return this.squareOfSum - this.sumOfSquares;
        },
        enumerable: false,
        configurable: true
    });
    return Squares;
}());
exports.default = Squares;
var square = new Squares(10);
console.log(square.difference);
console.log(square.squareOfSum);
console.log(square.sumOfSquares);
//# sourceMappingURL=difference%20of%20squares.js.map