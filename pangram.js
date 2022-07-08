"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPangram = void 0;
function isPangram(text) {
    const set = new Set(text.toLowerCase().replace(/[^a-zA-Z]/g, ''));
    return set.size === 26;
}
exports.isPangram = isPangram;
console.log(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog'));
//# sourceMappingURL=pangram.js.map