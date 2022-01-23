"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeap = void 0;
function isLeap(year) {
    var isLeap = false;
    if (year % 4 === 0) {
        isLeap = true;
    }
    if (year % 100 === 0) {
        isLeap = false;
    }
    if (year % 400 === 0) {
        isLeap = true;
    }
    return isLeap;
}
exports.isLeap = isLeap;
console.log(isLeap(1970));
//# sourceMappingURL=leap.js.map