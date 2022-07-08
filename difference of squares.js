"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Squares {
    constructor(number) {
        this.number = number;
    }
    get sumOfSquares() {
        let sum = 0;
        for (let i = 1; i <= this.number; i++) {
            sum += (i * i);
        }
        return sum;
    }
    get squareOfSum() {
        let sum = 0;
        for (let i = 1; i <= this.number; i++) {
            sum += i;
        }
        return sum * sum;
    }
    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}
exports.default = Squares;
const square = new Squares(10);
console.log(square.difference);
console.log(square.squareOfSum);
console.log(square.sumOfSquares);
//# sourceMappingURL=difference%20of%20squares.js.map