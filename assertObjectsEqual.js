const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(String.fromCodePoint(128516) + ` Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(String.fromCodePoint(128534) + ` Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length === Object.keys(object2).length) {
    for (const object1Key of Object.keys(object1)) {

      if (Array.isArray(object1[object1Key]) && Array.isArray(object2[object1Key])) {
        if (!(eqArrays(object1[object1Key], object2[object1Key]))) {
          return false;
        }
      } else if (object1[object1Key] !== object2[object1Key]) {
        return false;
      }
    }
    return true;
  } else {
    return false
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, { a: "1", b: "2" });
assertObjectsEqual(ab, ba);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ba, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, { c: "1", d: ["2", 3, 4] });