//object literals part 1
let firstname = "Bibek";
let lastname ="Shrestha";

let person = { // {} with properties is called object literals 
//and es2015 provides short hand notation for firstname:firstname is firstname no assignment and : needed
    firstname,
    lastname
};

console.log(person.firstname);
console.log(person.lastname);

function createPerson(firstname , lastname,age){
    let fullname = firstname +" "+ lastname;
    return {
        firstname,
        lastname,
        fullname,
        // ignore :function in es6 short hand notation in object literals
        // isSenior:function(){  
        //     return age>60;
        // }
        isSenior(){  
            return age>60;
        }
    };// inside function also we dont need assignemnt
}

let p = createPerson('BIbek1','Shrestha1',32);

console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());

