import { fibonaci } from "../src/finonaci";

let count = 0;
for ( const v of fibonaci(0,1) ){
    console.log(v);
    if ( count++ > 10 ){
        break;
    }
}
