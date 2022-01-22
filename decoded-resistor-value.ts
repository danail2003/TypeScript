export function decodedResistorValue(colors: Array<string>): string {
    let output: string = '';

    for (let i = 0; i < colors.length - 1; i++) {
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

    let isZero = Number(output) % 10 === 0;

    if (colors[colors.length - 1] === 'red' && isZero) {
        output = (Number(output) / 10).toString();

        return output + " kiloohms";
    }

    switch (colors[colors.length - 1]) {
        case 'black':
            output += ' ohms';
            break;
        case 'brown':
            output += '0 ohms';
            break;
        case 'red':
            output += '00 ohms';
            break;
        case 'orange':
            output += ' kiloohms';
            break;
        case 'yellow':
            output += '0 kiloohms';
            break;
        case 'green':
            output += '00 kiloohms';
            break;
        case 'blue':
            output += '000 kiloohms';
            break;
        case 'violet':
            output += '0000 kiloohms';
            break;
        case 'grey':
            output += '00000 kiloohms';
            break;
        case 'white':
            output += '000000 kiloohms';
            break;
        default:
            break;
    }

    return output;
}

console.log(decodedResistorValue(['red', 'black', 'red']));