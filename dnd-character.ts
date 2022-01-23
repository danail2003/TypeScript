export const DnDCharacter = {
    generateAbilityScore,
    getModifierFor
};

export function generateAbilityScore() {
    const fourThrows = 4;
    let constitution = [];
    let max = Math.ceil(6);
    let min = Math.floor(1);

    for (let i = 0; i < fourThrows; i++) {
        constitution.push(Math.floor(Math.random() * (max - min + 1) + min));
    }

    let minElement = Number.MAX_VALUE;
    let index = 0;

    for (let i = 0; i < constitution.length; i++) {
        const element = constitution[i];

        if (element < minElement) {
            minElement = element;
            index = i;
        }
    }

    constitution.splice(index, 1);

    const sumArray = constitution.reduce((a, b) => a + b, 0);

    getModifierFor(sumArray);
}

generateAbilityScore();

export function getModifierFor(constitution: number) {
    let hitpoints = 10;
    let diff = Math.floor((constitution - hitpoints) / 2);

    return diff;
}