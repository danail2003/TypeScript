import { Melon } from "./melon";

export class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get ElementIndex(): number {
        return this.weight + this.melonSort.length;
    }

    toString() {
        return `Element: Water
        Sort: ${this.melonSort}
        Element Index: ${this.ElementIndex}`;
    }
}