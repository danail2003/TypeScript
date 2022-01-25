"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Matrix = void 0;
var Matrix = /** @class */ (function () {
    function Matrix(matrix) {
        this.matrix = matrix;
    }
    Object.defineProperty(Matrix.prototype, "rows", {
        get: function () {
            var rows = this.matrix.split('\n').map(function (r) { return r.split(' ').map(function (v) { return Number(v); }); });
            return rows;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Matrix.prototype, "columns", {
        get: function () {
            var columns = [];
            var _loop_1 = function (i) {
                columns.push(this_1.rows.map(function (r) { return r[i]; }));
            };
            var this_1 = this;
            for (var i = 0; i < this.rows.length; i++) {
                _loop_1(i);
            }
            return columns;
        },
        enumerable: false,
        configurable: true
    });
    return Matrix;
}());
exports.Matrix = Matrix;
var matrix = new Matrix('1 2\n3 4');
console.log(matrix.rows);
//# sourceMappingURL=matrix.js.map