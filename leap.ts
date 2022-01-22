export function isLeap(year: number): boolean {
    let isLeap: boolean = false;

    if (year % 4 === 0) {
        isLeap = true;
    }

    if (year % 100 === 0) {
        isLeap = false;
    }

    if (year % 400 === 0) {
        isLeap = true;
    }

    return isLeap;
}

console.log(isLeap(1970));