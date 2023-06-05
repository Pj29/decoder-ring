const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // If the shift value isn't present,
    // equal to 0, less than -25, or greater than 25, the function should return false
    if (!shift || shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    // convert input to lowercase
    const lowerCasedInput = input.toLowerCase();
    let result = "";
    // iterate through each character
    for (const char of lowerCasedInput) {
      // check if the current character is inside the alphabet string
      if (alphabet.includes(char)) {
        // obtain the index using indexOf
        const index = alphabet.indexOf(char);
        // calculate the new index of the char based on encoding or decoding
        // modulo op is used to make the index wrap around within the valid range
        let newIndex = encode
          ? // sum of index, shift and 26 is the shifted position
            (index + shift + 26) % 26
          : // difference of index, shift and 26 is the shifted position in reverse
            (index - shift + 26) % 26;
        // newIndex char in the alphabet is stored in encryptedChar
        const encryptedChar = alphabet[newIndex];
        // append current encryptedChar to result
        result += encryptedChar;
      } else {
        // append to result if the character is not present in alphabet
        result += char;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
