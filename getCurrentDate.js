/**
 * Write a javascript program to get the current date
 */


const currentDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;

}


console.log(currentDate());