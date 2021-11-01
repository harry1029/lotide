const middle = function(array) {
  let result = [];
  if (array.length > 2) {
    if (array.length % 2 !== 0) {
      result.push(array[Math.floor(array.length / 2)]);
    } else {
      result.push(array[(array.length / 2) - 1]);
      result.push(array[array.length / 2]);
    }
  }
  return result;
};

module.exports = middle;