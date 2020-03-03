/**
 * Write a javascript code that scans the objects in an array and returns the first character 
 * 
 */


let animals = ['Goat', 'Ostrich', 'Tiger', 'Mouse', 'Impala', 'Lemur', 'Kangaroo'];

const hiddenMessage = animals.map((animal)=> animal[0]).join('');

console.log(hiddenMessage);