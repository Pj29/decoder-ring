// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  // define the english alphabet and split it for spaces 
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift > 25 || shift < -25 || shift === 0) {
      return false;
    }
    const lowerCasedInput = input.toLowerCase();
    const result = lowerCasedInput.map(function (char) {
      if (!/[a-z]/.test(char)) {
        return char;
      }
    });
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
