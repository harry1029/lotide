const tail = function(array) {
  return array.slice(1);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(128516) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(128534) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words2 = ["Yo Yo"];
console.log(tail(words2));
assertEqual(words2.length, 1);

const words3 = [];
console.log(tail(words3));
assertEqual(words3.length, 0);