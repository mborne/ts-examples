"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fibonacci = fibonacci;
/**
 * Computes x^n
 */
function* fibonacci(a, b) {
    let u = a;
    let v = b;
    while (true) {
        let current = u;
        u = v;
        v = current + v;
        yield current;
    }
}
