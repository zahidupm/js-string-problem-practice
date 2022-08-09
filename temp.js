let first = 5;
let second = 7;
console.log(first, second);
// This is wrong approach
// first = second;
// second = first;

// approach: 01
// const temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// approach: 02 Destructuring
[first, second] = [second, first];
console.log(first, second);
