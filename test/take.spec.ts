import { describe, expect, it } from "vitest";
import { take } from "../src/take.ts";

/**
 * Sample generator returning 0,1,2,...
 */
function* integers(): Generator<number> {
    for (let i = 0; ; i++) {
        yield i;
    }
}

describe("take", () => {
    it("should return [] for take(integers(),0)", () => {
        expect(take(integers(), 0)).toEqual([]);
    });

    it("should return [0,1,2] for take(integers(),3)", () => {
        expect(take(integers(), 3)).toEqual([0, 1, 2]);
    });
});
