//foreach
// var numbers = [2,4,6,8];
// numbers.forEach(arrayFunction);
// function arrayFunction(element,index,array){
//     console.log("arr["+index+"]= "+element);
// }
//es2015
var myMapnew = new Map([
    ["fname", "Bibek"],
    ["lname", "Shrestha"]
]);
myMapnew.forEach(mapFunction);
function mapFunction(value, key, callingMap) {
    console.log(key + " " + value);
    console.log(myMapnew == callingMap);
}
var mySetnew = new Set([1, 2, 3]);
mySetnew.forEach(setFunction);
function setFunction(value, key, callingSet) {
    console.log(key + " " + value);
    console.log(mySetnew == callingSet);
}
//# sourceMappingURL=tutorial34.js.map