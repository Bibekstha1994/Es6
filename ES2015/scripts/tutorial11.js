var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        //console.log(this.id);
        var self = this;
        setTimeout(function () { console.log(self.id); }, 1000);
        //arrow function refers to parent this but function() creats its own this . 
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee.greet();
//# sourceMappingURL=tutorial11.js.map