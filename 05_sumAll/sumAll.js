const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof (num1) != "number" || typeof (num2) != "number" || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    let upperLimit = null;
    let lowerLimit = null;
    if (num1 > num2) {
        upperLimit = num1;
        lowerLimit = num2;
    } else if (num2 > num1) {
        upperLimit = num2;
        lowerLimit = num1;
    } else {
        //same number.. just return either of them.
        return num1;
    }
    let sum = 0;
    for (currentNumber = lowerLimit; currentNumber <= upperLimit; ++currentNumber) {
        sum += currentNumber;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
