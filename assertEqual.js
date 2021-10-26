const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}` + String.fromCodePoint(128516));
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}` + String.fromCodePoint(128534));
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 5);