var _a;
//symbols
//es6 has type called symbols-> to generate unique id 
var s = Symbol();
console.log(typeof s);
var fs = Symbol("First Symbol");
console.log(fs.toString()); // to access description
var s2 = Symbol("Test");
var s3 = Symbol("Test");
console.log(s2 === s3); //return false because create unique id even same description passed
//use same symbol in diff or same file we have builtin symbol registry
var s4 = Symbol.for("RegSymbol"); // check RegSymbol with desc exit if exit it is written in s4 to s4 else it creates new symbol
var s5 = Symbol.for("RegSymbol");
console.log(s4 === s5); // return true brecause same symbol is retrieved and saved in next symbol
console.log(Symbol.keyFor(s4)); // give us key or desc for symbol i.e RegSymbol
var fnamesymb = Symbol("Firstname");
var persymbol = (_a = {},
    _a[fnamesymb] = "Bibek",
    _a);
console.log(Object.getOwnPropertyNames(persymbol)); // firstname not listed because it is a symbol so we need to use
console.log(Object.getOwnPropertySymbols(persymbol));
//# sourceMappingURL=tutorial36.js.map