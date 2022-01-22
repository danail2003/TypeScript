export function decodedValue(colors: Array<string>): number {
    let output: string = '';
    let length: number = 0;

    if (colors.length > 2) {
        length = 2;
    }
    else {
        length = colors.length;
    }

    for (let i = 0; i < length; i++) {
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

console.log(decodedValue(['yellow', 'violet']));