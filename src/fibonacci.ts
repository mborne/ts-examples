/**
 * Computes x^n
 */
export function* fibonacci(a: number, b: number): Generator<number> {
    let u = a;
    let v = b;
    while(true){
        let current = u;
        u = v;
        v = current + v;
        yield current;
    }
}

