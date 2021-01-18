//iterating objects

//in javascript objects arenot iterable and doesnot work with for of loop

let personObj = {
        fname:"bibek",
        lname:"shrestha",
};
personObj[Symbol.iterator] = function(){
    let properties = Object.keys(personObj);
    let count = 0;
    let isDone = false;
    let next = () =>{
        if(count >=properties.length){
            isDone = true;
        }
        return{done:isDone,value:this[properties[count++]]};
    }
    return {next};
}
//doesnot work like below
for(let p of personObj){
        console.log(p);
 }

//error is personObj[symbol.iterator] is not function so define personObj[symbol.iterator]

