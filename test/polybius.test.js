// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybiusTests", () => {
    describe("encoding a message", () => {
        it("should encode a message by translating each letter to number pairs", () => {
            const message = "message";
            const actual = polybius(message);
            const expected = "23513434112251";

            expect(actual).to.equal(expected);
        });

        it("should translate both 'i' and 'j' to 42", () => {
            const message = "jigsaw";
            const actual = polybius(message);
            const expected = "424222341125";

            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is", () => {
            const message = "cat in the hat";
            const actual = polybius(message);
            const expected = "311144 4233 443251 321144";

            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message", () => {
        it("should decode a message by translating each pair of numbers into a letter", () => {
            const message = "23513434112251";
            const actual = polybius(message, false);
            const expected = "message";

            expect(actual).to.equal(expected);
        });

        it("should translate 42 to both 'i' and 'j'", () => {
            const message = "424222221351";
            const actual = polybius(message, false);

            expect(actual).to.include("i");
            expect(actual).to.include("j");
        });

        it("should leave spaces as is", () => {
            const message = "3251131343 2543241341";
            const actual = polybius(message, false);
            const expected = "hello world";

            expect(actual).to.equal(expected);
        });

    });
});
