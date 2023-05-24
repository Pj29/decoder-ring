const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    if (!shift || shift > 25 || shift < -25 || shift === 0) {
      return false; 
    }

    const lowerCasedInput = input.toLowerCase();
    let result = '';

    for (const char of lowerCasedInput) {
      if (alphabet.includes(char)) {
        const index = alphabet.indexOf(char);
        let newIndex = encode ? (index + shift +26) % 26 : (index - shift + 26) % 26;
        const encryptedChar = alphabet[newIndex];
        result += encryptedChar;
      } else {
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
