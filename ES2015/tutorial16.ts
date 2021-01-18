//object literals 2

let ln = "last name";
let person1 = {
    "first name" : "Bibek", //property with space is allowed within ""
    [ln] : "Shrestha", // use variable enclosed within 
};

//and called as 

console.log(person1["first name"]);
console.log(person1[ln]);
