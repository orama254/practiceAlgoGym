const fizzbuzz = (num) => {

    for(let i = 0; i <= 100; i++) {
        //check if the number is a multiple of 3
        if(1 % 3 === 0) {
            console.log("fizz");
        } //check if the number is a multiple of 3
        else if(i % 5 === 0) {
            console.log("buzz");
        } //check if the number is a multiple of 3 and 5
        else if(i % 3 === 0 && i % 5 === 0){
            console.log("fizzbuzz");
        }
        else {
            console.log(i);
        }
    } 
    
};
fizzbuzz(100);