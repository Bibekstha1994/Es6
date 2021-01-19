//interfaces->typescript->to describe particular type 

interface Personnew{
    fname: string;
    lname:string;
    age ?: number; //? denotes optional
}

let employeenew11: Personnew = {
    fname:"Bibek",
    lname:"Shrestha",
    age:23
} // create new variable employeenew11 of type person and fname,lname and age must be include if no ?

let employeenew12: Personnew = {
    fname:"Bibek",
    lname:"Shrestha"
}