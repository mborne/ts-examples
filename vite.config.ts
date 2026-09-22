import dts from "vite-plugin-dts";
import { defineConfig } from "vite";

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
});
