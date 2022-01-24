"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnDCharacter = void 0;
var DnDCharacter = /** @class */ (function () {
    function DnDCharacter() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
    DnDCharacter.generateAbilityScore = function () {
        var min = 3;
        var max = 18;
        return Math.round(Math.random() * (max - min) + min);
    };
    DnDCharacter.getModifierFor = function (constitution) {
        var hitpoints = 10;
        var diff = Math.floor((constitution - hitpoints) / 2);
        return diff;
    };
    return DnDCharacter;
}());
exports.DnDCharacter = DnDCharacter;
//# sourceMappingURL=dnd-character.js.map