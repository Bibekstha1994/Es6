//iterating over maps

let myNewMap = new Map([
        ["fname","Bibek"],
        ["lname","Shrestha"]
]);

for(let value of myNewMap.values()){
    console.log(value);
}

for(let key of myNewMap.keys()){
    console.log(key);
}

//both key and value

for(let entry of myNewMap.entries()){
    console.log(`${entry[0]} -> ${entry[1]}`);
}
//or
for(let [key,value] of myNewMap.entries()){
    console.log(`${key} -> ${value}`);
}