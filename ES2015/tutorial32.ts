//maps

let myMap1 = new Map();

myMap1.set("fname","Bibek");
myMap1.set("age","23");

console.log(myMap1.get("fname"));

//can use object as key within map

let ob_n1 ={};
let ob_n2 ={};
myMap1.set(ob_n1,10);
myMap1.set(ob_n2,20);
console.log(myMap1.get(ob_n1));
myMap1.delete("fname");
//to clear all key value pair

myMap1.clear();

console.log(myMap1.size);

console.log(myMap1.has("fname"));

