//class body and methods
//class body consist only method not properties
var Person1 = /** @class */ (function () {
    //methods
    function Person1(name) {
        this.name = name;
        console.log(this.name + " construcotr");
    }
    //static method
    Person1.staticMethod = function () {
        console.log('Static Method');
    };
    //prototype method
    Person1.prototype.greetPerson = function () {
        console.log('Hello ' + this.name);
    };
    return Person1;
}());
var n_p_p = new Person1("Bibek");
//static method are called using person1 class as
Person1.staticMethod();
n_p_p.greetPerson();
//# sourceMappingURL=tutorial22.js.map