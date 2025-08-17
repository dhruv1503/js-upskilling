function sameFrequency(num1, num2) {
  if (!(typeof num1 === "number" && typeof num2 === "number")) {
    return false;
  }

  if (num1 === 0 && num2 === 0) {
    return true;
  }

  const num1Map = new Map();
  // O(n)
  while (num1 > 0) {
    const num = num1 % 10;
    num1Map.set(num, (num1Map.get(num) || 0) + 1);
    num1 = Math.trunc(num1 / 10) || 0;
  }
  // O(n)
  while (num2 > 0) {
    const num = num2 % 10;

    if (!num1Map.has(num)) {
      return false;
    }
    if (num1Map.has(num)) {
      num1Map.set(num, num1Map.get(num) - 1);
    }
    if (num1Map.get(num) === 0) {
      num1Map.delete(num);
    }

    num2 = Math.trunc(num2 / 10) || 0;
  }

  return num1Map.size === 0
}


console.log(sameFrequency(22,222))