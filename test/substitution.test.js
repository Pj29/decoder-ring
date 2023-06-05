// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("encoding a message", () => {
  it("should encode a message by using the given substitution alphabet", () => {
    const message = "thinkful";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet);
    const expected = "jrufscpw";

    expect(actual).to.equal(expected);
  });
});

describe("decoding a message", () => {
  it("should decode a message by using the given substitution alphabet", () => {
    const message = "jrufscpw";
    const alphabet = "xoyqmcgrukswaflnthdjpzibev";
    const actual = substitution(message, alphabet, false);
    const expected = "thinkful";

    expect(actual).to.equal(expected);
  });
});
