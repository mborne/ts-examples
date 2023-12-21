import "mocha";
import { expect } from "chai";
import { pow } from "../src/pow";

describe("pow", () => {
    it("should return 1 for pow(0,0)", () => {
        const result = pow(0,0);
        expect(result).to.equal(1);
    });
    it("should return 1 for pow(2,0)", () => {
        const result = pow(2,0);
        expect(result).to.equal(1);
    });
    it("should return 8 for pow(2,3)", () => {
        const result = pow(2,3);
        expect(result).to.equal(8);
    });
});