// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitutionTest", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const message = "hello world";
        const actual = substitution(message);
        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "hello world";
        const alphabet = "notEnough";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "hello world";
        const alphabet = "abcabcabcabcabcabcabcabcab";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
    });
});