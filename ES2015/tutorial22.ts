//class body and methods
//class body consist only method not properties
class Person1{
    //methods

    constructor(name){
        this.name = name;
        console.log(this.name + " construcotr")
    }

    //static method

    static staticMethod(){
        console.log('Static Method');
    }

    //prototype method

    greetPerson(){
        console.log('Hello '+ this.name);
    }
}

let n_p_p = new Person1("Bibek");
//static method are called using person1 class as

Person1.staticMethod();
n_p_p.greetPerson();