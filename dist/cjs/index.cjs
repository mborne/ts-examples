"use strict";Object.defineProperty(exports, "__esModule", {value: true});// src/pow.ts
function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

// src/take.ts
function take(generator, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(generator.next().value);
  }
  return result;
}

// src/fibonacci.ts
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




exports.fibonacci = fibonacci; exports.pow = pow; exports.take = take;
//# sourceMappingURL=index.cjs.map