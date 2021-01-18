//symbols
//es6 has type called symbols-> to generate unique id 
let s = Symbol();

console.log(typeof s);

let fs = Symbol("First Symbol");

console.log(fs.toString()); // to access description

let s2 = Symbol("Test");
let s3 = Symbol("Test");

console.log(s2===s3); //return false because create unique id even same description passed

//use same symbol in diff or same file we have builtin symbol registry

let s4 = Symbol.for("RegSymbol"); // check RegSymbol with desc exit if exit it is written in s4 to s4 else it creates new symbol
let s5 = Symbol.for("RegSymbol"); 
console.log(s4===s5); // return true brecause same symbol is retrieved and saved in next symbol


console.log(Symbol.keyFor(s4)); // give us key or desc for symbol i.e RegSymbol

let fnamesymb = Symbol("Firstname");

let persymbol = {
    [fnamesymb]: "Bibek", // property always be unique so no conflict
}

console.log(Object.getOwnPropertyNames(persymbol)); // firstname not listed because it is a symbol so we need to use
console.log(Object.getOwnPropertySymbols(persymbol));

