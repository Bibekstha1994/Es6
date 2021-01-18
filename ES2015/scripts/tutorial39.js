//iterating objects
//in javascript objects arenot iterable and doesnot work with for of loop
var personObj = {
    fname: "bibek",
    lname: "shrestha",
};
personObj[Symbol.iterator] = function () {
    var _this = this;
    var properties = Object.keys(personObj);
    var count = 0;
    var isDone = false;
    var next = function () {
        if (count >= properties.length) {
            isDone = true;
        }
        return { done: isDone, value: _this[properties[count++]] };
    };
    return { next: next };
};
//doesnot work like below
for (var _i = 0, personObj_1 = personObj; _i < personObj_1.length; _i++) {
    var p_1 = personObj_1[_i];
    console.log(p_1);
}
//error is personObj[symbol.iterator] is not function so define personObj[symbol.iterator]
//# sourceMappingURL=tutorial39.js.map