export function toRna(nucleotide: string): string {
    let rna: string = '';

    for (let i = 0; i < nucleotide.length; i++) {
        if (nucleotide[i] === 'A') {
            rna += 'U'
        }
        else if (nucleotide[i] === 'T') {
            rna += 'A';
        }
        else if (nucleotide[i] === 'C') {
            rna += 'G';
        }
        else if (nucleotide[i] === 'G') {
            rna += 'C'
        }
        else {
            throw new Error('Invalid input DNA.');
        }
    }

    return rna;
}