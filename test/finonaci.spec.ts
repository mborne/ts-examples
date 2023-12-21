import "mocha";
import { expect } from "chai";
import { fibonaci } from "../src/finonaci";

describe("fibonaci", () => {
    describe("fibonaci(0,1)", () => {
        const g = fibonaci(0,1);
        it("should return 0 for 0th element", () => {
            expect(g.next().value).to.equal(0);
        });
        it("should return 1 for 1th element", () => {
            expect(g.next().value).to.equal(1);
        });
        it("should return 1 for 2th element", () => {
            expect(g.next().value).to.equal(1);
        });
        it("should return 2 for 3th element", () => {
            expect(g.next().value).to.equal(2);
        });
        it("should return 3 for 4th element", () => {
            expect(g.next().value).to.equal(3);
        });
        it("should return 5 for 5th element", () => {
            expect(g.next().value).to.equal(5);
        });
        it("should return 8 for 6th element", () => {
            expect(g.next().value).to.equal(8);
        });
    });
});