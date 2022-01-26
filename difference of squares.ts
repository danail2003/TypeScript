export default class Squares {
    private number: number;

    constructor(number: number) {
        this.number = number;
    }

    get sumOfSquares(): number {
        let sum = 0;

        for (let i = 1; i <= this.number; i++) {
            sum += (i * i);
        }

        return sum;
    }

    get squareOfSum(): number {
        let sum = 0;

        for (let i = 1; i <= this.number; i++) {
            sum += i;
        }

        return sum * sum;
    }

    get difference(): number {
        return this.squareOfSum - this.sumOfSquares;
    }
}

const square = new Squares(10);

console.log(square.difference);
console.log(square.squareOfSum);
console.log(square.sumOfSquares);