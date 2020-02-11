/**
 * Given two values, whrite a Javascript program that returns the closest number to 100
 */

const closeTo100 = ( a, b) => (100 - a) < (100 - b) ? a : b;


console.log(closeTo100(97, 20));
console.log(closeTo100(44, 23));
console.log(closeTo100(62, 87));