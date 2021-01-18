var employee = {
    id:1,
    greet: function(){
        //console.log(this.id);
        var self = this;
        setTimeout(function(){console.log(self.id);},1000);
        //arrow function refers to parent this but function() creats its own this . 
        setTimeout(()=>{console.log(this.id);},1000)
    }
};

employee.greet();