import { fibonacci } from "../src/fibonacci";

let count = 0;
for ( const v of fibonacci(0,1) ){
    console.log(v);
    if ( count++ > 10 ){
        break;
    }
}
