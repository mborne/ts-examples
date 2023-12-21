/**
 * Take n element(s) from a given generator.
 *
 * @param generator the generator
 * @param n 
 * @returns 
 */
export function take<T>(generator: Generator<T>, n: number): T[] {
    let result : T[] = [];
    for ( let i = 0; i < n; i++ ){
        result.push(generator.next().value);
    }
    return result;
}
