//Rest operators

// let displayColors = function(){
//     console.log(message);
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }

// let message = 'list of Colors'
// displayColors(message,'Red');
// displayColors(message,'Red','Blue');
// displayColors(message,'Red','Blue','Green');

let displayColors = function(message, ...colors){ // converts list of colors to array so can add any no of params
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for(let i in colors){
        console.log(colors[i]);
    }
}

let message = 'list of Colors'
displayColors(message,'Red');
displayColors(message,'Red','Blue');
displayColors(message,'Red','Blue','Green');