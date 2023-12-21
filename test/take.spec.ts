import "mocha";
import { expect } from "chai";
import { take } from "../src/take";

/**
 * Sample generator returning 0,1,2,...
 */
function* integers(): Generator<number> {
    for ( let i = 0;; i++) {
        yield i;
    }
}

describe("take", () => {
    it("should return [] for take(integers(),0)", () => {
        let result = take(integers(),0);
        expect(result).to.eql([]);
    });

    it("should return [0,1,2] for take(integers(),3)", () => {
        let result = take(integers(),3);
        expect(result).to.eql([0,1,2]);
    });
});
