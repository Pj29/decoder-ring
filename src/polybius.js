const polybiusModule = (function () {
  const alphabet = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I/J", "K"],
    ["L", "M", "N", "O", "P"],
    ["Q", "R", "S", "T", "U"],
    ["V", "W", "X", "Y", "Z"],
  ];

  function polybius(input, encode = true) {
    if (!encode) {
      // decoding
      // split input string into an array using whitespace
      const newArray = input.split(" ");
      const length = newArray.join("").length;
      // check if the total number of chars is odd
      if (length % 2 === 1) {
        return false;
      } else {
        // if the input has even number of chars, call decodedMessage fn
        return decodedMessage(input);
      }
    } else {
      // encoding
      return encodedMessage(input);
    }
  }

  function decodedMessage(input) {
    // initialize vars to store decoded message and i as the counter
    let message = "";
    let i = 0;
    // continue looping until counter var reaches the end of input string
    while (i < input.length) {
      // check if the current char at index i is a space, space is added to message,
      // and counter is incremented by 1 to move to next char
      if (input[i] === " ") {
        message += " ";
        i++;
      } else {
        // get pair of coordinates in the polybius square
        const charOne = input[i];
        const charTwo = input[i + 1];
        // use alphabet array to get the row and column
        let currentChar = alphabet[charTwo - 1][charOne - 1];
        // if currentChar is equal to I/J, wrap in quotes to show that they share the same position
        if (currentChar === "I/J") {
          currentChar = "(" + currentChar + ")";
        }
        message += currentChar;
        // increment by 2 to skip to the next pair
        i += 2;
      }
    }
    return message.toLowerCase();
  }

  function encodedMessage(input) {
    let message = "";
    // make encoding case insensitive with upperCasedInput
    const upperCasedInput = input.toUpperCase();
    for (let j = 0; j < upperCasedInput.length; j++) {
      const currentChar = upperCasedInput[j];
      // check if char is a space and append to message
      if (currentChar === " ") {
        message += " ";
        // check if currentChar is equal to I or J, append 42 to it
      } else if (currentChar === "I" || currentChar === "J") {
        message += "42";
      } else {
        // loop over alphabet array and for each row check if match
        // includes the current char
        for (let i = 0; i < alphabet.length; i++) {
          const match = alphabet[i];
          // retrieve the index of current char if match is found
          if (match.includes(currentChar)) {
            const index = match.indexOf(currentChar);
            // column number
            message += index + 1;
            // row number
            message += i + 1;
          }
        }
      }
    }
    return message;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
