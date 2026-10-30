const fibonacci = function (value) {
  if (value < 0 || typeof value !== "number" || Number.isNaN(value)) {
    return "OOPS";
  }

  return Math.round(((1 + Math.sqrt(5, 2)) / 2) ** value / Math.sqrt(5, 2));
};

// Do not edit below this line
module.exports = fibonacci;
