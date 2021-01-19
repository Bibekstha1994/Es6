//Array and Tuples

let strArr1 : string[] = ['Hello','world'];
//Or
let strArr2 : Array<string> = ['Hello','world'];

let anyArr : any[] = ['Hello',10 , true];


//tuple ->specify type array can contain

let myTuple : [string, number] = ["hy",10];

console.log(myTuple[0]);
console.log(myTuple[1]);
//add element
myTuple[2] =100;

console.log(myTuple[2]);