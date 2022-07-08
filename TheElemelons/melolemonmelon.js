"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Melolemonmelon = void 0;
const waterMelon_1 = require("./waterMelon");
class Melolemonmelon extends waterMelon_1.Watermelon {
    constructor(weight, melonSort) {
        super(weight, melonSort);
        this.arrayOfMelons.push('Water');
        this.arrayOfMelons.push('Fire');
        this.arrayOfMelons.push('Earth');
        this.arrayOfMelons.push('Air');
    }
    morph() {
        const element = this.arrayOfMelons.shift();
        this.arrayOfMelons.push(element);
        return element;
    }
}
exports.Melolemonmelon = Melolemonmelon;
;
//# sourceMappingURL=melolemonmelon.js.map