const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    // ensure alphabet is 26 chars
    if (!isValidAlphabet(alphabet)) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const lowerCasedInput = input.toLowerCase();
    // store chars in result
    let result = "";
    // loop through each char in lowerCasedInput
    for (let i = 0; i < lowerCasedInput.length; i++) {
      const currentChar = lowerCasedInput[i];
      // check if there is a space and append if so
      if (currentChar === " ") {
        result += " ";
        // continue statement here is to skip the rest of the code block and go to the next
        // iteration to prevent further looping if the current char is a space
        continue;
      }
      // get value for index var depending on encode being true or false
      // encode true, search for the index of the current char in in standardAlphabet
      // encode false, search for the index of the current char witin alphabet param
      const index = encode
        ? standardAlphabet.indexOf(currentChar)
        : alphabet.indexOf(currentChar);
      // check if current char is -1 ie not found in the alphabet
      // append the char at corresponding index in the alphabet to the result if true
      // or append the current char at corresponding index in the standardAlphabet var
      if (index !== -1) {
        result += encode ? alphabet[index] : standardAlphabet[index];
      } else {
        // append to result if current char is not valid ex -1
        result += currentChar;
      }
    }

    return result;
  }

  function isValidAlphabet(alphabet) {
    // check if alphabet is not a string or the length is not 26
    if (typeof alphabet !== "string" || alphabet.length !== 26) {
      return false;
    }

    for (let i = 0; i < alphabet.length; i++) {
      // retrieve current char at the index i
      // then check if current char index is not equal to i, ensuring each char is unqiue
      const currentChar = alphabet[i];
      if (alphabet.indexOf(currentChar) !== i) {
        return false;
      }
    }

    return true;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
