export class Matrix {
    matrix: string;

    constructor(matrix: string) {
        this.matrix = matrix;
    }

    get rows(): number[][] {
        let rows = this.matrix.split('\n').map(r => r.split(' ').map(v => Number(v)));

        return rows;
    }

    get columns(): number[][] {
        let columns = [];

        for (let i = 0; i < this.rows.length; i++) {
            columns.push(this.rows.map(r => r[i]));
        }

        return columns;
    }
}

let matrix = new Matrix('1 2\n3 4');

console.log(matrix.rows);