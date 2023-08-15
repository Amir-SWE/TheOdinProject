const reverseString = function(word) {
    let reverseString = '';
    for (i=word.length; i>-1; i--) {
        reverseString += word.charAt(i);
    }
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;
