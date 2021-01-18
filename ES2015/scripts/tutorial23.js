//class Inheritance-> use extends
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NPerson = /** @class */ (function () {
    function NPerson(name) {
        console.log(name + ' Person Constructor');
    }
    NPerson.prototype.getId = function () {
        return 10;
    };
    return NPerson;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + ' Employee Constructor');
        return _this;
    }
    Employee.prototype.getId = function () {
        return 50;
        //to access parent use super.getId()
    };
    return Employee;
}(NPerson));
var e = new Employee("Bibek");
console.log(e.getId()); // if derived class has method it calls that else calls from parent class
//# sourceMappingURL=tutorial23.js.map