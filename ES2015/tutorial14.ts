
//spread operator // rest is to combine to array and sread to split array
let displayColors1 = function(message, ...colors){ // rest operator is specified in function declaration 
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message1 = 'list of Colors'

let colorArray = ['Orange','Yellow','Indigo'];
displayColors1(message1,...colorArray);// spread operator is specified in function call 