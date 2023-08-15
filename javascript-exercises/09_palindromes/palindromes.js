const palindromes = function (str) {
    let strArray = str.toLowerCase().split("");
    let onlyLetters = strArray.filter(string => (/[a-zA-Z]/).test(string));
    return onlyLetters.toString() === onlyLetters.reverse().toString()
};

// Do not edit below this line
module.exports = palindromes;
