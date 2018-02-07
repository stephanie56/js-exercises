// Given an Array of strings, use Array.prototype.reduce to write a function that
// creates an object that contains the number of times each string occured in the array.

const someWords = ["apple", "banana", "apple", "durian", "durian", "durian"];

const countWords = words => {
  return words.reduce((fruitCounter, word) => {
    return word in fruitCounter ?
      Object.assign(fruitCounter, {[word]: fruitCounter[word] + 1}) :
      Object.assign(fruitCounter, {[word]: 1})
  }, {});
};

console.log(countWords(someWords));
// {
//   apple: 2,
//   banana: 1,
//   durian: 3,
// }

module.exports = countWords;
