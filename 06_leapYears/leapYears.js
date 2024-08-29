const leapYears = function (year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                // leap year
                return true;
            } else {
                // not a leap year
                return false;
            }
        } else {
            // leap year
            return true;
        }
    } else {
        // not a leap year
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
