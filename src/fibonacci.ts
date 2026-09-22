/**
 * Generates the Fibonacci-like sequence starting with a and b, where each
 * element is the sum of the two preceding ones. The generator is infinite,
 * see take to consume a given number of elements.
 */
export function* fibonacci(a: number, b: number): Generator<number> {
    let u = a;
    let v = b;
    while (true) {
        const current = u;
        u = v;
        v = current + v;
        yield current;
    }
}
