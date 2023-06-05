// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("encoding a message", () => {
  it("should encode a message by shifting the letters", () => {
    const message = "thinkful";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "wklqnixo";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by shifting the letters in the opposite direction", () => {
    const message = "wklqnixo";
    const shift = 3;
    const actual = caesar(message, shift, false);
    const expected = "thinkful";

    expect(actual).to.equal(expected);
  });
});
