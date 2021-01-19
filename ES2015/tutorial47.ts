//class constructors

class PersonTy{
    public fname:string;
    public lname:string;
    constructor(fname:string, lname:string){
        this.fname = fname;
        this.lname = lname;
    }
}

class PersonTyp{
    constructor(public fname:string, public lname:string){

    }
}
//both are equivalent ->use in angular