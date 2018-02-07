// Implement Array.prototype.reduce using recursion.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const numbers = [1, 2, 3, 4, 5];

// Solution 1: not using recursion
// const reduce = (array, fn, init) => {
//   let acc = init;
//   array.forEach(num => {
//     acc = fn(acc, num);
//   });
//
//   return total;
// };

const reduce = (array, fn, init) => {
  let currIdx = array.length - 1;
  if(currIdx <= 0) {
    return fn(init, array[0]);
  } else {
    return fn(reduce(array.slice(0, currIdx), fn, init), array[currIdx--]);
  }
};

const sum = (acc, val) => acc + val;

console.log(reduce(numbers, sum, 0)); // 15

module.exports = reduce;
