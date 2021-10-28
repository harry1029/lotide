const middle = function(array) {
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      result.push(array[Math.floor(array.length / 2)]);
    } else {
      result.push(array[(array.length / 2) - 1]);
      result.push(array[array.length / 2]);
    }
  }
  return result;
};


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(String.fromCodePoint(128516) + ` Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(String.fromCodePoint(128534) + ` Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);