//symbol iterator
var str = "Hello";
var arr = [1, 2, 3];
var num = 5;
var obj = { name: "Bibek" };
console.log("For string -" + typeof str[Symbol.iterator]); // if return function/method then it can be used with for loop 
console.log("For array -" + typeof arr[Symbol.iterator]); //function
console.log("For number -" + typeof num[Symbol.iterator]); //undefined
console.log("For object -" + typeof obj[Symbol.iterator]); //undefined
//# sourceMappingURL=tutorial37.js.map