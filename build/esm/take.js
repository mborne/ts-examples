/**
 * Take n element(s) from a given generator.
 */
export function take(generator, n) {
    let result = [];
    for (let i = 0; i < n; i++) {
        result.push(generator.next().value);
    }
    return result;
}
