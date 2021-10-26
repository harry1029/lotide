const head = function(array) {
  return array[0];
};




const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}` + String.fromCodePoint(128516));
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}` + String.fromCodePoint(128534));
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);