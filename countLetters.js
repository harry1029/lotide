const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(128516) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(128534) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const stringNoSpace = string.replace(/ /g, '');
  const results = {};

  for (const letter of stringNoSpace) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

const sentence1 = '122333';
const sentence2 = 'Hello World';
const sentence3 = 'lighthouse in the house'

const result1 = countLetters(sentence1);
const result2 = countLetters(sentence2);
const result3 = countLetters(sentence3);

console.log(result1);
console.log(result2);
console.log(result3);

assertEqual(result1['1'], 1);
assertEqual(result1['2'], 2);
assertEqual(result1['3'], 3);
assertEqual(result2['o'], 2);
assertEqual(result3['h'], 4);
assertEqual(result3['e'], 3);