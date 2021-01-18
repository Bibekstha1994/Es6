//weak sets
var mySet2 = new Set();
var key = {};
mySet2.add(key);
console.log(mySet2.size);
key = null;
//even we set key null a reference to key object still exit in set
console.log(mySet2.size);
//so we can retrieve by
//key = [...mySet2][0];
//to create weak set
var set = new WeakSet();
var key1 = {};
set.add(key1);
console.log(set.has(key1));
//memory is handled properly with weak sets
//# sourceMappingURL=tutorial31.js.map