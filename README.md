# ts-examples

Some TypeScript examples written to get started with tooling setup (ts-node, mocha, chai, nyc).

## Examples

| Description                                  | Source                               | Test                                             | CLI                                  |
| -------------------------------------------- | ------------------------------------ | ------------------------------------------------ | ------------------------------------ |
| `pow(x,n)` as `x^n`                          | [src/pow.ts](src/pow.ts)             | [test/pow.spec.ts](test/pow.spec.ts)             |                                      |
| Fibonacci **generator**                      | [src/fibonacci.ts](src/fibonacci.ts) | [test/fibonacci.spec.ts](test/fibonacci.spec.ts) | [cli/fibonacci.ts](cli/fibonacci.ts) |
| Take n elements from a **generic** generator | [src/take.ts](src/take.ts)           | [test/fibonacci.spec.ts](test/take.spec.ts)      | [cli/take.ts](cli/take.ts)           |

## Usage

### Run cli examples

```bash
npx ts-node cli/fibonacci.ts
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

## License

[MIT](LICENSE)

