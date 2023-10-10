let arr = [1,2,3,4,5,6,7,8,9,10]
let fruits = ['apple', 'orange', 'banana', 'pineapple', 'grape', 'peel']

let filtered = arr.filter((item)=> item%2 == 0)
let squared = filtered.map((item)=> item*item)
let fruitsFilter = fruits.filter((item)=>( (item.includes("a"))? item : null))
let fruitsCapitalizr = fruits.map((item)=> item.toUpperCase())

console.log("filtered fruit : " ,  fruitsFilter);
console.log("capitalize fruit : " ,  fruitsCapitalizr);
console.log("simple array : ", arr);
console.log("filtered array : ", filtered);
console.log("squared array : ", squared);