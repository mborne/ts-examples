"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pow = pow;
/**
 * Computes x^n
 */
function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}
