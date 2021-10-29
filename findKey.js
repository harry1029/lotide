const findKey = function(obj, callback) {
  let result;
  for (const key of Object.keys(obj)) {
    if (callback(obj[key])) {
      result = key;
      return result;
    }
  }
  return result;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(128516) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(128534) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"

assertEqual(result1, 'noma');

const cities = {"Toronto": "Canada", "Ottawa": "Canada", "New York": "USA", "Shang Hai": "China", "Lisbon": "Portugal"};

const result2 = findKey(cities, x => x === "China");
const result3 = findKey(cities, x => x === "Canada");

assertEqual(result2, 'Shang Hai');
assertEqual(result3, 'Toronto');