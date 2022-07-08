import { Melon } from "./melon";

export class AirMelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get ElementIndex(): number {
        return this.weight + this.melonSort.length;
    }

    toString() {
        return `Element: Air
        Sort: ${this.melonSort}
        Element Index: ${this.ElementIndex}`;
    }
}