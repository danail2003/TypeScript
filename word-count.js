"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.count = void 0;
function count(phrase) {
    var splittedPhrase = phrase.trim().toLowerCase().split(/\s+/);
    var phrasesCount = new Map();
    for (var i = 0; i < splittedPhrase.length; i++) {
        var element = splittedPhrase[i];
        if (!phrasesCount.has(element)) {
            phrasesCount.set(element, 0);
        }
        var count_1 = phrasesCount.get(element) + 1;
        phrasesCount.set(element, count_1);
    }
    return phrasesCount;
}
exports.count = count;
console.log(count('one of each'));
//# sourceMappingURL=word-count.js.map