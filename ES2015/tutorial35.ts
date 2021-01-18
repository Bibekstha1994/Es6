//weak map

let myWeakMap = new WeakMap();

let ob1map = {};
myWeakMap.set(ob1map,"Hello World");

console.log(myWeakMap.get(ob1map));