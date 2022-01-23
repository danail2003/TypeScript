"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.age = void 0;
function age(planet, seconds) {
    var orbitalYears = {
        mercury: 0.2408467,
        venus: 0.61519726,
        earth: 365.25,
        mars: 1.8808158,
        jupiter: 11.862615,
        saturn: 29.447498,
        uranus: 84.016846,
        neptune: 164.79132,
    };
    var secondMinutesDays = {
        seconds: 60,
        minutes: 60,
        days: 24,
    };
    var years = 0;
    switch (planet) {
        case 'earth':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / orbitalYears.earth).toFixed(2);
            break;
        case 'mercury':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / (orbitalYears.earth * orbitalYears.mercury)).toFixed(2);
            break;
        case 'venus':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / (orbitalYears.earth * orbitalYears.venus)).toFixed(2);
            break;
        case 'mars':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / (orbitalYears.earth * orbitalYears.mars)).toFixed(2);
            break;
        case 'jupiter':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / (orbitalYears.earth * orbitalYears.jupiter)).toFixed(2);
            break;
        case 'saturn':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / (orbitalYears.earth * orbitalYears.saturn)).toFixed(2);
            break;
        case 'uranus':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / (orbitalYears.earth * orbitalYears.uranus)).toFixed(2);
            break;
        case 'neptune':
            years = +(seconds / secondMinutesDays.seconds / secondMinutesDays.minutes / secondMinutesDays.days / (orbitalYears.earth * orbitalYears.neptune)).toFixed(2);
            break;
        default:
            break;
    }
    return years;
}
exports.age = age;
console.log(age('jupiter', 901876382));
//# sourceMappingURL=space-age.js.map