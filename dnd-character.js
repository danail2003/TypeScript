"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnDCharacter = void 0;
class DnDCharacter {
    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }
    static generateAbilityScore() {
        const min = 3;
        const max = 18;
        return Math.round(Math.random() * (max - min) + min);
    }
    static getModifierFor(constitution) {
        let hitpoints = 10;
        let diff = Math.floor((constitution - hitpoints) / 2);
        return diff;
    }
}
exports.DnDCharacter = DnDCharacter;
//# sourceMappingURL=dnd-character.js.map