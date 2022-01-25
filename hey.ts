export function hey(speech: string): string {
    speech = speech.trim();

    if (speech.length === 0) {
        return 'Fine. Be that way!';
    }

    if (speech.endsWith('?') && /[A-Z]/.test(speech) && !/[a-z]/.test(speech)) {
        return 'Calm down, I know what I\'m doing!';
    }

    if (speech.endsWith('?')) {
        return 'Sure.';
    }

    if (/[A-Z]/.test(speech) && !/[a-z]/.test(speech)) {
        return 'Whoa, chill out!';
    }

    return 'Whatever.';
}

console.log(hey('Tom-ay-to, tom-aaaah-to.'));