//weak sets

let mySet2 = new Set();

let key = {}

mySet2.add(key);
console.log(mySet2.size);

key = null;
//even we set key null a reference to key object still exit in set
console.log(mySet2.size);
//so we can retrieve by
//key = [...mySet2][0];

//to create weak set

let set = new WeakSet();

let key1 = {}

set.add(key1);
console.log(set.has(key1));

//memory is handled properly with weak sets
