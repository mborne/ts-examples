import { describe, expect, it } from "vitest";
import { fibonacci } from "../src/fibonacci.ts";
import { take } from "../src/take.ts";

describe("fibonacci", () => {
    // Chaque test crée son propre générateur : l'ordre d'exécution n'a
    // aucune importance, contrairement à un générateur partagé par le describe.
    it("should generate [0,1,1,2,3,5,8] for fibonacci(0,1)", () => {
        expect(take(fibonacci(0, 1), 7)).toEqual([0, 1, 1, 2, 3, 5, 8]);
    });

    it("should generate [2,1,3,4,7] for fibonacci(2,1)", () => {
        expect(take(fibonacci(2, 1), 5)).toEqual([2, 1, 3, 4, 7]);
    });
});
