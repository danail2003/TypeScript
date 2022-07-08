"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
function count(phrase) {
    let splittedPhrase = phrase.trim().toLowerCase().split(/\s+/);
    let phrasesCount = new Map();
    for (let i = 0; i < splittedPhrase.length; i++) {
        const element = splittedPhrase[i];
        if (!phrasesCount.has(element)) {
            phrasesCount.set(element, 0);
        }
        let count = phrasesCount.get(element) + 1;
        phrasesCount.set(element, count);
    }
    return phrasesCount;
}
exports.count = count;
console.log(count('one of each'));
//# sourceMappingURL=word-count.js.map