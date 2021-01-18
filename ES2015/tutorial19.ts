//string templates 

let user = "Bibek";

//let greet = "Welcome " + user + " to ES2015";
//user backtick sign to concatinate var and warp variable with ${} in var
//can use both single and double cotation inside it
//supoorts multiline 
let greet = `Welcome 'single' "double" ${user} to ES2015
                This is second line.
                 Third
`;
console.log(greet);