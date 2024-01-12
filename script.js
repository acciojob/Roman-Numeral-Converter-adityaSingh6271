function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let result = '';

  for (let key in obj) {
    const [symbol, value] = obj[key];

    while (num >= value) {
      result += symbol;
      num -= value;
    }

    // Check for subtraction cases (e.g., IV, IX, XL, XC, etc.)
    const nextKey = (parseInt(key) + 1).toString();

    if (nextKey in obj) {
      const [nextSymbol, nextValue] = obj[nextKey];
      const difference = value - nextValue;

      if (num >= difference && difference >= nextValue) {
        result += nextSymbol + symbol;
        num -= difference;
      }
    }
  }

  return result;
}

// Test with input 36
console.log(convertToRoman(36));

// Test with input 798
console.log(convertToRoman(798));

// Export the function for use in other files (e.g., testing)
module.exports = convertToRoman;
