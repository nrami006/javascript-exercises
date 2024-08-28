// Choosing to do a recursive implementation just to practice recursion...
const reverseString = function (string) {
    let reversedSubstr = "";
    // If string is more than one character, reverse the string excluding the last character.
    if (string.length > 1) {
        reversedSubstr = reverseString(string.substring(0, string.length - 1));
    }
    // The reversed string will be the last letter concatenated with the reversed substring. i.e: CAT is T + AC (which is CA reversed)
    // If string is only 1 letter, this will return only that letter since reversedSubStr is initialized to empty string.
    return string.charAt(string.length - 1) + reversedSubstr;
};

// Do not edit below this line
module.exports = reverseString;
