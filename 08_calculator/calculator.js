const add = function (x, y) {
  return (x + y);
};

const subtract = function (x, y) {
  return (x - y);
};

const sum = function (arrayOfNumbers) {
  let sum = 0;
  for (number of arrayOfNumbers) {
    sum += number;
  }
  return sum;
};

const multiply = function (arrayOfNumbers) {
  let total = 1;
  for (number of arrayOfNumbers) {
    total *= number;
  }
  return total;
};

const power = function (x, n) {
  return (x ** n);
};

// x * (x-1) * x(-2)... * 1
const factorial = function (x) {
  // 1! and 0! are both 1.
  if (x == 1 || x == 0) {
    return 1;
  }
  // recursively calculate factorial. Its just cleaner. Might be better to just do a for loop for performance.
  return x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
