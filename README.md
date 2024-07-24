# ts-examples

Some TypeScript examples written to get started with tooling setup ([tsx](https://tsx.is/getting-started), mocha, chai, nyc and [tsup](https://tsup.egoist.dev/)).

## Requirements

* [NodeJS >= 20](https://nodejs.org/fr)

## Examples

| Description                                  | Source                               | Test                                             | CLI                                  |
| -------------------------------------------- | ------------------------------------ | ------------------------------------------------ | ------------------------------------ |
| `pow(x,n)` as `x^n`                          | [src/pow.ts](src/pow.ts)             | [test/pow.spec.ts](test/pow.spec.ts)             |                                      |
| Fibonacci **generator**                      | [src/fibonacci.ts](src/fibonacci.ts) | [test/fibonacci.spec.ts](test/fibonacci.spec.ts) | [cli/fibonacci.ts](cli/fibonacci.ts) |
| Take n elements from a **generic** generator | [src/take.ts](src/take.ts)           | [test/fibonacci.spec.ts](test/take.spec.ts)      | [cli/take.ts](cli/take.ts)           |

## Usage

### Run cli examples

```bash
npx tsx cli/fibonacci.ts
```

### Run tests

> See [.mocharc.json](.mocharc.json) 

```bash
# run all tests
npm run test
# run single test file
npm run test test/pow.spec.ts
```

### Check test coverage

> See [.nycrc](.nycrc) 

```bash
# run all tests
npm run coverage
```

### Bundling

See [tsup.config.ts](tsup.config.ts), [package.json - main, module, types and exports](package.json) :

```bash
npm run build
```

It allows :

* Usage in [index.html](index.html)
* Usage with `import` syntax (ES module) :

```js
import {pow} from '@mborne/ts-examples';

console.log(pow(10,3));
```

* Usage with `require` syntax (CommonJS) :

```js
const pow = require('@mborne/ts-examples').pow;

console.log(pow(10,3));
```


## Credits

Bunding method taken from [Turfjs](https://github.com/Turfjs/turf/blob/master/tsup.config.ts)

## License

[MIT](LICENSE)

