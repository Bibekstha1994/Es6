//symbol iterator

let str = "Hello";
let arr = [1,2,3];
let num = 5;
let obj = {name:"Bibek"};

console.log("For string -" + typeof str[Symbol.iterator]); // if return function/method then it can be used with for loop 
console.log("For array -" + typeof arr[Symbol.iterator]);//function
console.log("For number -" + typeof num[Symbol.iterator]);//undefined
console.log("For object -" + typeof obj[Symbol.iterator]);//undefined