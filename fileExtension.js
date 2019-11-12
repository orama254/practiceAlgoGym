/**
 * Write a Javascript program to get the extension of a file name
 */


 //lastIndexOf is used to get the contents after the last dot 
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('package.json'));
console.log(getFileExtension('file.xml'));
console.log(getFileExtension('vue3.config.js'));