import { Melon } from "./melon";

export class FireMelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get ElementIndex(): number {
        return this.weight + this.melonSort.length;
    }

    toString() {
        return `Element: Fire
        Sort: ${this.melonSort}
        Element Index: ${this.ElementIndex}`;
    }
}