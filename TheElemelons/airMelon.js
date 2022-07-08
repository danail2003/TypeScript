"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirMelon = void 0;
const melon_1 = require("./melon");
class AirMelon extends melon_1.Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get ElementIndex() {
        return this.weight + this.melonSort.length;
    }
    toString() {
        return `Element: Air
        Sort: ${this.melonSort}
        Element Index: ${this.ElementIndex}`;
    }
}
exports.AirMelon = AirMelon;
//# sourceMappingURL=airMelon.js.map