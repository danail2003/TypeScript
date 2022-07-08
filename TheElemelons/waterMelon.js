"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Watermelon = void 0;
const melon_1 = require("./melon");
class Watermelon extends melon_1.Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get ElementIndex() {
        return this.weight + this.melonSort.length;
    }
    toString() {
        return `Element: Water
        Sort: ${this.melonSort}
        Element Index: ${this.ElementIndex}`;
    }
}
exports.Watermelon = Watermelon;
//# sourceMappingURL=waterMelon.js.map