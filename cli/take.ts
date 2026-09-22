import { fibonacci } from "../src/fibonacci.ts";
import { take } from "../src/take.ts";

let result = take(fibonacci(0,1),15);
console.log(JSON.stringify(result));
