const tail = require('../tail');
const assertEqual = require('../assertEqual');


// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words2 = ["Yo Yo"];
console.log(tail(words2));
assertEqual(words2.length, 1);

const words3 = [];
console.log(tail(words3));
assertEqual(words3.length, 0);