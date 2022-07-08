"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FireMelon = void 0;
const melon_1 = require("./melon");
class FireMelon extends melon_1.Melon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
    }
    get ElementIndex() {
        return this.weight + this.melonSort.length;
    }
    toString() {
        return `Element: Fire
        Sort: ${this.melonSort}
        Element Index: ${this.ElementIndex}`;
    }
}
exports.FireMelon = FireMelon;
//# sourceMappingURL=fireMelon.js.map