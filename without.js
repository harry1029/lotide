const without = function(source, itemsToRemove) {
  let result = source;

  for (const item of itemsToRemove) {
    if (result.includes(item)) {
      // Note to self, using anonymous function here allows you avoid passing source in the parameter
      result = result.filter((n) => {
        return n !== item;
      });
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
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);