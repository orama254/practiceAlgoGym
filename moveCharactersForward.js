/**
 * Write a Javascript program that replaces every character in a string with the next
 * character in the alphabet. e.g replace every c with d, replace x with y
 */


 const pushCharsForward = (str) => 
                str.split('')
                    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
                    .join('');

console.log(pushCharsForward('x'));
console.log(pushCharsForward('m'));
console.log(pushCharsForward('p'));
console.log(pushCharsForward('e'));