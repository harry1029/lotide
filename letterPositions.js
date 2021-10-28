const letterPositions = function(sentence) {
  const results = {};
  let counter = 0;

  for (const letter of sentence) {
    if (results[letter]) {
      results[letter].push(counter);
    } else {
      results[letter] = [counter];
    }
    counter++;
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

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);