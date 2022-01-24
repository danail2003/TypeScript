export class DnDCharacter {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly wisdom: number;
    readonly charisma: number;
    readonly hitpoints: number;

    constructor() {
        this.strength = DnDCharacter.generateAbilityScore();
        this.dexterity = DnDCharacter.generateAbilityScore();
        this.constitution = DnDCharacter.generateAbilityScore();
        this.intelligence = DnDCharacter.generateAbilityScore();
        this.wisdom = DnDCharacter.generateAbilityScore();
        this.charisma = DnDCharacter.generateAbilityScore();
        this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
    }

    public static generateAbilityScore(): number {
        const min = 3;
        const max = 18;

        return Math.round(Math.random() * (max - min) + min);
    }

    public static getModifierFor(constitution: number): number {
        let hitpoints = 10;
        let diff = Math.floor((constitution - hitpoints) / 2);

        return diff;
    }
}
