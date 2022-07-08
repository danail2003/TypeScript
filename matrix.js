"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
class Matrix {
    constructor(matrix) {
        this.matrix = matrix;
    }
    get rows() {
        let rows = this.matrix.split('\n').map(r => r.split(' ').map(v => Number(v)));
        return rows;
    }
    get columns() {
        let columns = [];
        for (let i = 0; i < this.rows.length; i++) {
            columns.push(this.rows.map(r => r[i]));
        }
        return columns;
    }
}
exports.Matrix = Matrix;
let matrix = new Matrix('1 2\n3 4');
console.log(matrix.rows);
//# sourceMappingURL=matrix.js.map