//object literals part 1
var firstname = "Bibek";
var lastname = "Shrestha";
var person = {
    //and es2015 provides short hand notation for firstname:firstname is firstname no assignment and : needed
    firstname: firstname,
    lastname: lastname
};
console.log(person.firstname);
console.log(person.lastname);
function createPerson(firstname, lastname, age) {
    var fullname = firstname + " " + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        // ignore :function in es6 short hand notation in object literals
        // isSenior:function(){  
        //     return age>60;
        // }
        isSenior: function () {
            return age > 60;
        }
    }; // inside function also we dont need assignemnt
}
var p = createPerson('BIbek1', 'Shrestha1', 32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
//# sourceMappingURL=tutorial15.js.map