for (let index = 1; index < 16; index++) {
    
    if (index % 3 === 0 && index % 5 === 0) {
        console.log(index + " index: Fizz Buzz ");
    }
    else if (index % 3 === 0) {
        console.log(index + " index: Fizz ");
    }
     else if (index % 5 === 0) {
        console.log(index + " index: Buzz ");
    }
    
}