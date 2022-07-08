"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLORS = exports.colorCode = void 0;
const colorCode = (color) => {
    return exports.COLORS.indexOf(color);
};
exports.colorCode = colorCode;
exports.COLORS = [
    "black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"
];
console.log((0, exports.colorCode)('white'));
//# sourceMappingURL=color-code.js.map