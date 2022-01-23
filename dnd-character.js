"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModifierFor = exports.generateAbilityScore = exports.DnDCharacter = void 0;
exports.DnDCharacter = {
    generateAbilityScore: generateAbilityScore,
    getModifierFor: getModifierFor
};
function generateAbilityScore() {
    var fourThrows = 4;
    var constitution = [];
    var max = Math.ceil(6);
    var min = Math.floor(1);
    for (var i = 0; i < fourThrows; i++) {
        constitution.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    var minElement = Number.MAX_VALUE;
    var index = 0;
    for (var i = 0; i < constitution.length; i++) {
        var element = constitution[i];
        if (element < minElement) {
            minElement = element;
            index = i;
        }
    }
    constitution.splice(index, 1);
    var sumArray = constitution.reduce(function (a, b) { return a + b; }, 0);
    getModifierFor(sumArray);
}
exports.generateAbilityScore = generateAbilityScore;
generateAbilityScore();
function getModifierFor(constitution) {
    var hitpoints = 10;
    var diff = Math.floor((constitution - hitpoints) / 2);
    return diff;
}
exports.getModifierFor = getModifierFor;
//# sourceMappingURL=dnd-character.js.map