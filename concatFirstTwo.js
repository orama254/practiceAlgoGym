/**
 * Write a Javascript program to concatenate two strings
 * except their first two characters
 */

 const strConcat = (str1, str2) =>
    str1.slice(2) + str2.slice(2); //since they are zero indexed

console.log(strConcat('qwerty', 'asdfgh'));
console.log(strConcat('Bridges', 'Initiative'));