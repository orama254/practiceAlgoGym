/**
 * Write a Javascript program to get the extension of a file name
 */

const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('package.json'));
console.log(getFileExtension('file.xml'));