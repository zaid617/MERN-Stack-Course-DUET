console.log("hello world form node js");

let arr = [ 1,2,3,4,56,7,8,9,82,21,54,76,98,32,324,43]

let sortedArray = arr.sort((a, b)=> a - b );

console.log(sortedArray);

let doubleArrayValue = arr.map((num)=>(num*2))

console.log(doubleArrayValue);

let squareArrayValue = arr.map((num)=>num)

arr.forEach(element => {
    element + 2
});

