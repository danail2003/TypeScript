"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodedValue = void 0;
function decodedValue(colors) {
    var output = '';
    var length = 0;
    if (colors.length > 2) {
        length = 2;
    }
    else {
        length = colors.length;
    }
    for (var i = 0; i < length; i++) {
        switch (colors[i]) {
            case 'black':
                output += 0;
                break;
            case 'brown':
                output += 1;
                break;
            case 'red':
                output += 2;
                break;
            case 'orange':
                output += 3;
                break;
            case 'yellow':
                output += 4;
                break;
            case 'green':
                output += 5;
                break;
            case 'blue':
                output += 6;
                break;
            case 'violet':
                output += 7;
                break;
            case 'grey':
                output += 8;
                break;
            case 'white':
                output += 9;
                break;
            default:
                break;
        }
    }
    return Number(output);
}
exports.decodedValue = decodedValue;
console.log(decodedValue(['yellow', 'violet']));
//# sourceMappingURL=decoded-value.js.map