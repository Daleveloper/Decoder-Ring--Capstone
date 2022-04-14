// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const lowerCase = input.toLowerCase()
    if (shift > 25 || shift < -25 || !shift) {
      return false
    }
    //encoding below
    if (encode === false) {

      if (shift < 0) {
        return caesar(input, shift + 26, encode = false);
      }
      let result = "";
      for (let i = 0; i < input.length; i++) {
        let c = lowerCase[i];
        if (c.match(/[a-z]/i)) {
          let code = lowerCase.charCodeAt(i);
          if (code >= 97 && code <= 122) {
            let shiftedCode = code - shift;
            if (shiftedCode < 97) {
              shiftedCode += 26;
            }
            c = String.fromCharCode(((shiftedCode - 97) % 26) + 97);
          }
        }
        result += c;
      }
      return result;
    }
    else {
      if (shift < 0) {
        return caesar(input, shift + 26, encode = true);
      }
      let result = "";
      for (let i = 0; i < input.length; i++) {
        let c = lowerCase[i];
        if (c.match(/[a-z]/i)) {
          let code = lowerCase.charCodeAt(i);
          if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + shift) % 26) + 97);
          }
        }
        result += c;
      }
      return result;
    }
  }


  return {
    caesar,
  };
})();


module.exports = { caesar: caesarModule.caesar };
