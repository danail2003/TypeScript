import { Watermelon } from "./waterMelon";

export class Melolemonmelon extends Watermelon {
    private arrayOfMelons: [string];

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.arrayOfMelons.push('Water');
        this.arrayOfMelons.push('Fire');
        this.arrayOfMelons.push('Earth');
        this.arrayOfMelons.push('Air');
    }

    morph() {
        const element = this.arrayOfMelons.shift();
        this.arrayOfMelons.push(element);

        return element; 
    }
};