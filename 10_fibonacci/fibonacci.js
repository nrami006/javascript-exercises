const fibonacci = function (n) {
    if (n < 0) return "OOPS";
    if (n == 0) return 0;
    if (n <= 2) return 1;
    let currentNum = 1;
    let prevNum = 1;
    let temp = null;
    for (i = 2; i < n; ++i) {
        temp = currentNum;
        currentNum += prevNum
        prevNum = temp;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
