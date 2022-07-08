"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarthMelon = void 0;
const melon_1 = require("./melon");
class EarthMelon extends melon_1.Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get ElementIndex() {
        return this.weight + this.melonSort.length;
    }
    toString() {
        return `Element: Earth
        Sort: ${this.melonSort}
        Element Index: ${this.ElementIndex}`;
    }
}
exports.EarthMelon = EarthMelon;
//# sourceMappingURL=earthMelon.js.map