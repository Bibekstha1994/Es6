//class
//classes are infact just special functions  but class is not hoisting i.e it cannot be called before declaration 
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var n_p = new Person();
console.log(n_p.greet === Person.prototype.greet); // gives true
//function can be called any where
emplooyee();
function emplooyee() { }
emplooyee();
console.log(typeof Person);
//# sourceMappingURL=tutorial21.js.map