// Use Array.prototype.reduce to implement a simple version of Array.prototype.map.

const numbers = [1, 2, 3, 4, 5];

const map = (array, fn) => array.reduce((acc, curr) => [...acc, fn(curr)], []);

const double = x => x * 2;

console.log(map(numbers, double));
// [2, 4, 6, 8, 10]

module.exports = map;
