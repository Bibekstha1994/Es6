//class Inheritance-> use extends

class NPerson{
        constructor(name){
            console.log(name + ' Person Constructor');
        }
        getId(){
            return 10;
        }
}

class Employee extends NPerson{
    constructor(name){
       super(name); // to call constructor from parent class
        console.log(name + ' Employee Constructor');
    }
    getId(){
        return 50;
        //to access parent use super.getId()
    }
}

let e = new Employee("Bibek");
console.log(e.getId());// if derived class has method it calls that else calls from parent class