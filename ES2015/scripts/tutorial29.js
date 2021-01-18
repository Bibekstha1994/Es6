// sets and maps
// sets are list of values but cannot contain duplicate value
// in arrays we access individual element but in sets we check if value is present or not donot access it
var mySet = Object.create(null);
mySet.id = true; // 0 value means id doesnot exist
if (mySet.id) {
    console.log('id exists');
}
// maps is collection of key value pairs
var myMap = Object.create(null);
myMap.name = "Bibek"; // name is key bibek is value
var val = myMap.name; // map for retreiving value
console.log(val);
myMap[100] = 'Hello';
console.log(myMap['100']); // myMap['100'] because object property can only be string ,number change to string
//so create issue when using number and string 100 as key
var ob1 = {};
var ob2 = {};
myMap[ob1] = "World";
console.log(myMap[ob1]);
console.log(myMap[ob2]);
// both gives World as output because string representation of ob1 and ob2 are same as
console.log(ob1.toString());
console.log(ob2.toString());
//# sourceMappingURL=tutorial29.js.map