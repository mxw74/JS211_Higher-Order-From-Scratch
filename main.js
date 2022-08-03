let wordArr = ["cat", "cow", "rabbit", "dog"];
let numArr = [1, 2, 3, 4];
console.log(numArr);
console.log(wordArr);

//.map() - function that takes an array of lines and a function that returns an array with each item manipulated by the function
//go through word array and remove the first word of the array
const map1 = wordArr.map((x) => wordArr.slice(1));
console.log(map1);

//go through number array and multiply each index by 3
const map2 = numArr.map((x) => x * 3);
console.log(map2);

//.filter() - function that takes an array of items and and a function that returns an array with only the items that return true in the function.

const filteredArr = numArr.filter((value) => value > 2);
console.log(filteredArr);
