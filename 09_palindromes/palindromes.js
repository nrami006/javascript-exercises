const palindromes = function (string) {
    //Strip string of all punctuation and white space
    let strippedString = string.replace(/\W|_/g, '');
    //Lowercase the string so capitalization doesnt matter. 
    strippedString = strippedString.toLowerCase();
    let headIndex = 0;
    let tailIndex = strippedString.length - 1;
    // Check if palindrome
    while (headIndex <= tailIndex) {
        if (strippedString[headIndex] != strippedString[tailIndex]) {
            // Not a palindrome
            return false;
        }
        ++headIndex;
        --tailIndex;
    }
    //Made it out of the loop -- string is a palindrome.
    return true;
};

// Do not edit below this line
module.exports = palindromes;
