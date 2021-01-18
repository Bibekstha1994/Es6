//sets
var mySet1 = new Set();
var ob11 = {};
var ob12 = {};
//can add both string and numeric value
mySet1.add("Hello");
mySet1.add(1);
mySet1.add(ob11); // objects are not converted to string so objects are unique
mySet1.add(ob12);
//mySet1.add(1);// ignore if added same value and size remains same
console.log(mySet1.size); // gives size of set
var newSet = new Set([1, 2, 3, 4, 4, 4]); // can be created using array
console.log(newSet.size);
var chainSet = new Set().add("helllo").add('world');
console.log(chainSet.size);
//to check existence of value in set we use has method
console.log(newSet.has(1)); // returns true or false
//to delete value from set use delete method
console.log(newSet.delete(1));
console.log(newSet.size);
//# sourceMappingURL=tutorial30.js.map