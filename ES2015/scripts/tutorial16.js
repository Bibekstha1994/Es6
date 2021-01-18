//object literals 2
var _a;
var ln = "last name";
var person1 = (_a = {
        "first name": "Bibek"
    },
    _a[ln] = "Shrestha",
    _a);
//and called as 
console.log(person1["first name"]);
console.log(person1[ln]);
//# sourceMappingURL=tutorial16.js.map