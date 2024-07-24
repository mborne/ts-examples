/**
 * Computes x^n
 */
declare function pow(x: number, n: number): number;

/**
 * Take n element(s) from a given generator.
 */
declare function take<T>(generator: Generator<T>, n: number): T[];

/**
 * Computes x^n
 */
declare function fibonacci(a: number, b: number): Generator<number>;

export { fibonacci, pow, take };
