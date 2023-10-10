let arrNum = [1,2,3,4,5]
let arrFruit = ['apple', 'banana', 'cherry']

let doubleNum = arrNum.map((item)=>item*item)

console.log("without double :" , arrNum);
console.log("with double :" , doubleNum);

let capitalize = arrFruit.map((item)=>item.toUpperCase())

console.log("without capitalize :", arrFruit);
console.log("with capitalize :", capitalize);