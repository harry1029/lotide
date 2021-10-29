const map = function(array, callback) {
  console.log('array: ', array);
  console.log('callback: ', callback);

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(String.fromCodePoint(128516) + ` Assertion Passed: [${array1}] === [${array2}]`);
  } else {
    console.log(String.fromCodePoint(128534) + ` Assertion Failed: [${array1}] !== [${array2}]`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4, 5, 6];

const results1 = map(words, word => word[0]);
const results2 = map(numbers, number => number + 1);
const results3 = map(words, word => word.length);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, [2, 3, 4, 5, 6, 7]);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);