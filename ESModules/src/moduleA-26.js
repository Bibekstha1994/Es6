//named Export
console.log("Module A log1");
import {fname as f, lname as l ,obj} from './moduleB-26.js' // ./ for current directory // as for aliasing

// import are hoisted ,it is loaded before console
// import are readonly ie cant be changed as f = "bibek"
//but propery can be changed as 
obj.name = "hey";
console.log(obj.name);
console.log("Module A log2");
console.log(`${f} ${l}`);