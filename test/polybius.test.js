// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const message = "thinkful";
    const actual = polybius(message);
    const expected = "4432423352125413";

    expect(actual).to.equal(expected);
  });
});
