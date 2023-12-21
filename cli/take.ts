import { fibonacci } from "../src/fibonacci";
import { take } from "../src/take";

let result = take(fibonacci(0,1),15);
console.log(JSON.stringify(result));
