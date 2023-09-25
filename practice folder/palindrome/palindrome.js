let str = 1211

let reverseStr = str.toString().split("").reverse().join("").toString();
if (str == reverseStr) {console.log("its a palindrome")};
else{console.log("its not a palindrome")};
