//Generators

//Es6 generator is special type of function that can be paused in middle of execution and run some other code 
//and resume same function and pausing is possible with new keyword yeild
//same as function syntax but *


function *creategenerator(){
    yield 1;
    console.log("After 1st yeild");
    yield 2;

}

let myGen = creategenerator();

console.log(myGen.next());

console.log(myGen.next());
console.log(myGen.next());

//result

// {value: 1, done: false}
// After 1st yeild
// {value: 2, done: false}
// {value: undefined, done: true}

// can be used to white custom iterator

let personObj1 = {
    fname:"bibek",
    lname:"shrestha",
};
personObj1[Symbol.iterator] = function*(){
    let properties = Object.keys(personObj1);
    for(let t of properties){
        yield this[t]; // yeild each key
    }
};

for(let p of personObj1){
    console.log(p);
}

//or simply 

let person12 = {
    fname: 'Chandler',
    lname: 'Bing'
  }
  let properties12 = Object.keys(person12)
  for (let t of properties12) {
    console.log(person12[t])
  }

