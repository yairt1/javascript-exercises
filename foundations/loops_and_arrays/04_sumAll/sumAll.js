const sumAll = function (min, max) {
  if (!isPositive(min) || !isPositive(max)) {
    return "ERROR";
  }

  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

const isPositive = (arg) => Number.isInteger(arg) && arg > 0;

// Do not edit below this line
module.exports = sumAll;
