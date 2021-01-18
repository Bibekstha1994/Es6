//desturucturing objects

let employeeee = {
    fname3: "Bibek",
    lname3: "Shrestha",
    gender3: "Male"
};

let {fname3 :f,lname3 :l, gender3 : g} = employeeee; // assigning property of objects to variable 
//and each property name should match variable name
//aliasing to make easy to use short forms
console.log(f);// cannot use console.log(fname3);
console.log(l);
console.log(g);