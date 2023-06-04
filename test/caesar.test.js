// Write your tests here!

const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  it("should encode a string with a positive shift", () => {
    const input = "thinkful";
    const shift = 3;
    const expectedOutput = "wklqnixo";
    const result = caesar(input, shift, true);
    expect(result).to.equal(expectedOutput);
  });

  it("should decode a string with a negative shift", () => {
    const input = "wklqnixo";
    const shift = 3;
    const expectedOutput = "thinkful";
    const result = caesar(input, shift, false);
    expect(result).to.equal(expectedOutput);
  });

  it("should handle shifts greater than 25", () => {
    const input = "abc";
    const shift = 30;
    const expectedOutput = "efg";
    const result = caesar(input, shift, true);
    expect(result).to.equal(expectedOutput);
  });

  it("should handle shifts less than -25", () => {
    const input = "xyz";
    const shift = -30;
    const expectedOutput = "tuv";
    const result = caesar(input, shift, true);
    expect(result).to.equal(expectedOutput);
  });

  it("should handle a shift of 0 and return false", () => {
    const input = "Hello";
    const shift = 0;
    const expectedOutput = false;
    const result = caesar(input, shift, true);
    expect(result).to.equal(expectedOutput);
  });

  it("should handle an empty input string", () => {
    const input = "";
    const shift = 5;
    const expectedOutput = "";
    const result = caesar(input, shift, true);
    expect(result).to.equal(expectedOutput);
  });
});
