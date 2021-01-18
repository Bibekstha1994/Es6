//default function parameters
let getValue = function(value=10 , bonus = 5){
    console.log(value+bonus);
}
//if parameters not specified gives undefined if not default value given
//getValue();

getValue(); //10+5
getValue(20); //20+5
getValue(20,30); //20+30
getValue(undefined,30);//10+30

let percentbonus = 0.1; // () => 0.1 ; if used arrow function
let getValue1 = function(value=10 , bonus = value*percentbonus){ 
    // value is previous defined so can be used but value = bonus cannot be used
    console.log(value+bonus);
    console.log(arguments.length); // gives number of params passed
}
getValue1();
getValue1(20);