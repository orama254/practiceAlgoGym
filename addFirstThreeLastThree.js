/**
 * Program that creates a new string from a given string by taking the first 3 characters and the
 * last 3 characters. the string length must be three or more, if not the original string is returned
 */


const makeNewString = (str) => 
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);


    console.log(makeNewString('xyz'));
    console.log(makeNewString('PullRequest'));
    console.log(makeNewString('WajingaNyinyi'));
    console.log(makeNewString('Nodejs'));

    console.log(makeNewString('vw'));