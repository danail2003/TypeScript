export function isPangram(text: string): boolean {
    const set = new Set(text.toLowerCase().replace(/[^a-zA-Z]/g, ''));

    return set.size === 26;
}

console.log(isPangram('the_quick_brown_fox_jumps_over_the_lazy_dog'));