// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesarTests", () => {
    it("should return false if the shift amount is 0", () => {
        const message = "zebra magazine";
        const shift = 0;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
        const message = "zebra magazine";
        const shift = 26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
        const message = "zebra magazine";
        const shift = -26;
        const actual = caesar(message, shift);

        expect(actual).to.be.false;
    });
});

describe("caesar encoding a message", () => {
    it("should encode a message by shifting the letters", () => {
        const message = "message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "phvvdjh";

        expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
        const message = "a message.";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh.";

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "A Message";
        const shift = 3;
        const actual = caesar(message, shift);
        const expected = "d phvvdjh";

        expect(actual).to.equal(expected);
    });


})