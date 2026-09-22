# ts-examples

[![CI](https://github.com/mborne/ts-examples/actions/workflows/ci.yml/badge.svg)](https://github.com/mborne/ts-examples/actions/workflows/ci.yml)

Some TypeScript examples written to get started with tooling setup ([Vite](https://vite.dev/) in library mode, [Vitest](https://vitest.dev/) and [Biome](https://biomejs.dev/)).

## Requirements

* [NodeJS >= 22.18](https://nodejs.org/en) (Node strips TypeScript types on its own since that version)

## Examples

| Description                                  | Source                               | Test                                             | CLI                                  |
| -------------------------------------------- | ------------------------------------ | ------------------------------------------------ | ------------------------------------ |
| `pow(x,n)` as `x^n`                          | [src/pow.ts](src/pow.ts)             | [test/pow.spec.ts](test/pow.spec.ts)             |                                      |
| Fibonacci **generator**                      | [src/fibonacci.ts](src/fibonacci.ts) | [test/fibonacci.spec.ts](test/fibonacci.spec.ts) | [cli/fibonacci.ts](cli/fibonacci.ts) |
| Take n elements from a **generic** generator | [src/take.ts](src/take.ts)           | [test/take.spec.ts](test/take.spec.ts)           | [cli/take.ts](cli/take.ts)           |

## Usage

### Run cli examples

No loader, no build step : NodeJS runs the TypeScript files directly.

```bash
node cli/fibonacci.ts
# or, through the npm scripts :
npm run cli:take
```

### Run the browser demo

> See [index.html](index.html)

```bash
npm run dev
```

The Vite dev server transpiles the sources on the fly, so there is nothing to build
beforehand. Note that in **library mode** `vite build` does not process `index.html` :
the demo is meant to be viewed through `npm run dev`, not opened over `file://`.

### Run tests

> See the `test` section of [vite.config.ts](vite.config.ts)

```bash
# run all tests
npm run test
# run a single test file
npm run test -- test/pow.spec.ts
# re-run on change
npm run test:watch
```

### Check test coverage

> See the `test.coverage` section of [vite.config.ts](vite.config.ts)

```bash
npm run coverage
```

Coverage is computed by V8 and reported in `coverage/`. Thresholds are set to 90%,
so the command fails if coverage regresses.

### Lint and format

> See [biome.json](biome.json)

```bash
# report problems
npm run lint
# fix what can be fixed safely
npm run lint:fix
# format only
npm run format
```

### Run everything

```bash
npm run check
```

Typecheck, lint and tests with coverage — the same gates as [the CI workflow](.github/workflows/ci.yml).

### Bundling

See [vite.config.ts](vite.config.ts) and [package.json - main, module, types and exports](package.json) :

```bash
npm run build
```

Vite produces both flavours from a single entry point, and
[vite-plugin-dts](https://github.com/qmhc/unplugin-dts) emits a declaration file for
each of them so that `import` and `require` consumers get matching types :

```
dist/index.js    dist/index.d.ts     <- import
dist/index.cjs   dist/index.d.cts    <- require
```

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

The packaging itself can be checked with two one-shot tools, no dependency to add :

```bash
npx publint
npx @arethetypeswrong/cli --pack .
```

## A note on import extensions

Dropping `tsx` means NodeJS resolves the imports itself, and it is stricter than a
bundler : it does **not** do extensionless resolution, nor does it remap `.js` to
`.ts`. Hence two rules in this repository :

* **`cli/` and `test/` use `.ts`** — those files are run directly, so the specifier
  must be the real file name (`import { take } from "../src/take.ts"`).
* **`src/index.ts` uses `.js`** — TypeScript does not rewrite extensions inside the
  declaration files it emits ([TypeScript#61037](https://github.com/microsoft/TypeScript/issues/61037)).
  With `.js`, `dist/index.d.ts` ships `export * from './pow.js'`, which resolves in
  every module resolution mode, and the plugin rewrites it to `./pow.cjs` in
  `dist/index.d.cts`.

A consequence worth knowing : a CLI cannot import `../src/index.ts`, since the barrel
uses `.js` specifiers that NodeJS will not remap. It imports the leaf modules instead.

## License

[MIT](LICENSE)
