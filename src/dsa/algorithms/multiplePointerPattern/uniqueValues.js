// count unique values in a sorted array, there can be repeat values in an array and the function should return a sortedArr

// TC = O(n) SC = O(1)
function uniqueValues(arr) {
  if (!arr) {
    return 0;
  }
  if(!Array.isArray(arr)){
    return 0
  }
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  let compare = Number.MIN_SAFE_INTEGER;
  let uniqueValues = 0;
  while (i < arr.length) {
    if (arr[i] !== compare) {
      compare = arr[i];
      uniqueValues += 1;
    }
    i++;
  }
  return uniqueValues;
}

console.log(
  uniqueValues([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4,
    5,
  ])
);

// using set
// TC => O(N) // because array gets converted to set, it might be like a loop, where ser.set(variable) => O(n), then we have to get its's values, then again a loop
// SC => O(N) // as a new arrray and set are getting created
function uniqueValueSet(arr) {
  return Array.from(new Set(arr)).length;
}

console.log(
  uniqueValueSet([
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 3, 4, 4, 4, 4,
    5,
  ])
);
