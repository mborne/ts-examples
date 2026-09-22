import dts from "vite-plugin-dts";
// `vitest/config` réexporte le defineConfig de Vite en y ajoutant la clé `test`.
import { defineConfig } from "vitest/config";

export default defineConfig({
    build: {
        target: "es2022",
        sourcemap: true,
        minify: false,
        // outDir vaut "dist" et emptyOutDir vaut true par défaut
        // => remplace le `clean: true` de tsup.
        lib: {
            entry: "src/index.ts",
            formats: ["es", "cjs"],
            // package.json a "type": "module" :
            //   es  -> dist/index.js
            //   cjs -> dist/index.cjs
            fileName: "index",
        },
    },
    plugins: [
        dts({
            tsconfigPath: "./tsconfig.json",
            // Le tsconfig couvre aussi cli/ et test/ : on restreint l'émission à src/.
            include: ["src/**/*.ts"],
            entryRoot: "src",
            // 1re sortie -> dist/*.d.ts (ESM)
            // 2e  sortie -> dist/*.d.cts (CJS, spécificateurs relatifs réécrits)
            outDirs: ["dist", { dir: "dist", moduleFormat: "cjs" }],
            insertTypesEntry: true,
        }),
    ],

    test: {
        include: ["test/**/*.spec.ts"],
        // Bibliothèque de fonctions pures : aucun besoin du DOM.
        environment: "node",
        coverage: {
            provider: "v8",
            // Mesure tout src/, y compris les fichiers qu'aucun test n'importe.
            include: ["src/**/*.ts"],
            // Baril de ré-export : aucune logique à couvrir.
            exclude: ["src/index.ts"],
            reporter: ["text", "text-summary", "html", "lcov"],
            reportsDirectory: "coverage",
            thresholds: {
                lines: 90,
                functions: 90,
                branches: 90,
                statements: 90,
            },
        },
    },
});
