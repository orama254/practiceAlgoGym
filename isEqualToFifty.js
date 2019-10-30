/**
 * Write a Javascript Program to check two numbers and return true
 * if one of the numbers is 50 or if the sum of the two numbers is 50 
 */


const isEqualTo50 = (x,y) => x === 50 || y === 50 || (x + y) === 50;

console.log(isEqualTo50(50,0));
console.log(isEqualTo50(0, 50));

console.log(isEqualTo50(20,0));
console.log(isEqualTo50(0,20));

console.log(isEqualTo50(30,20));
console.log(isEqualTo50(25,25));