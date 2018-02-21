// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];

const reduce = (array, fn, init) => array.length === 1 ?
  fn(init, array[0]) : reduce(array.slice(1), fn, reduce(array.slice(0, 1), fn, init));

// How it works
// [1], [2, 3, 4, 5]
// [1], [2], [3, 4, 5]
// [1], [2], [3], [4, 5]
// [1], [2], [3], [4], [5]

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

module.exports = reduce;

// Solution 1: not using recursion
// const reduce = (array, fn, init) => {
//   let acc = init;
//   array.forEach(num => {
//     acc = fn(acc, num);
//   });
//
//   return acc;
// };

// Solution 2
// const reduce = (array, fn, init) => {
//   let currIdx = array.length - 1;
//   if(currIdx <= 0) {
//     return fn(init, array[0]);
//   } else {
//     return fn(reduce(array.slice(0, currIdx), fn, init), array[currIdx--]);
//   }
// };

// Solution 3
// const reduce = (array, fn, init) => {
//   if(array.length === 1) {
//     return fn(init, array[0]);
//   } else {
//     const smChunk = array.slice(0, 1);
//     const lgChunk = array.slice(1);
//     return reduce(lgChunk, fn, reduce(smChunk, fn, init));
//   }
// };
