//Destructuring Array -> pull apart  elements of array

let employeee = ["BIbek","Shrestha","Male"]; //if no value undefined is given 

let [fname, lname, gender] = employeee; //assign array individual value to these variables

console.log(fname);
console.log(lname);
console.log(gender);

//omit fname and lname if not nessecary but ,, is essential as 
//let[, , gender] = employeee;

//destructuring using rest operaor

let[fname1 , ...elements] = employeee;
console.log(fname1);
console.log(elements);

//using default values 
let employeee1 = ["BIbek","Shrestha"];
let [fname2, lname2, gender2="Male"] = employeee1;
