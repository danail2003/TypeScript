"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hey = void 0;
function hey(speech) {
    speech = speech.trim();
    if (speech.length === 0) {
        return 'Fine. Be that way!';
    }
    if (speech.endsWith('?') && /[A-Z]/.test(speech) && !/[a-z]/.test(speech)) {
        return 'Calm down, I know what I\'m doing!';
    }
    if (speech.endsWith('?')) {
        return 'Sure.';
    }
    if (/[A-Z]/.test(speech) && !/[a-z]/.test(speech)) {
        return 'Whoa, chill out!';
    }
    return 'Whatever.';
}
exports.hey = hey;
console.log(hey('Tom-ay-to, tom-aaaah-to.'));
//# sourceMappingURL=hey.js.map