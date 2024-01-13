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

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    while (num >= value) {
      result += symbol;
      num -= value;
    }

    // Check for subtractive notation (e.g., IV for 4, IX for 9, etc.)
    if (i % 2 === 0 && i < Object.keys(obj).length - 2) {
      const nextSymbol = obj[i + 2][0];
      const nextValue = obj[i + 2][1];

      const difference = value - nextValue;

      if (num >= difference) {
        result += nextSymbol + symbol;
        num -= difference;
      }
    }
  }

  return result;
}

module.exports = convertToRoman;
