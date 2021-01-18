//Destructuring Array -> pull apart  elements of array
var employeee = ["BIbek", "Shrestha", "Male"]; //if no value undefined is given 
var fname = employeee[0], lname = employeee[1], gender = employeee[2]; //assign array individual value to these variables
console.log(fname);
console.log(lname);
console.log(gender);
//omit fname and lname if not nessecary but ,, is essential as 
//let[, , gender] = employeee;
//destructuring using rest operaor
var fname1 = employeee[0], elements = employeee.slice(1);
console.log(fname1);
console.log(elements);
//using default values 
var employeee1 = ["BIbek", "Shrestha"];
var fname2 = employeee1[0], lname2 = employeee1[1], _a = employeee1[2], gender2 = _a === void 0 ? "Male" : _a;
//# sourceMappingURL=tutorial17.js.map