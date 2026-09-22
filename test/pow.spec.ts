import { describe, expect, it } from "vitest";
import { pow } from "../src/pow.ts";

describe("pow", () => {
    it("should return 1 for pow(0,0)", () => {
        expect(pow(0, 0)).toBe(1);
    });

    it("should return 1 for pow(2,0)", () => {
        expect(pow(2, 0)).toBe(1);
    });

    it("should return 8 for pow(2,3)", () => {
        expect(pow(2, 3)).toBe(8);
    });
});
