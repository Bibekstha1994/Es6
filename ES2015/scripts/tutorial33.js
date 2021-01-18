//iterating over maps
var myNewMap = new Map([
    ["fname", "Bibek"],
    ["lname", "Shrestha"]
]);
for (var _i = 0, _a = myNewMap.values(); _i < _a.length; _i++) {
    var value = _a[_i];
    console.log(value);
}
for (var _b = 0, _c = myNewMap.keys(); _b < _c.length; _b++) {
    var key_1 = _c[_b];
    console.log(key_1);
}
//both key and value
for (var _d = 0, _e = myNewMap.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0] + " -> " + entry[1]);
}
//or
for (var _f = 0, _g = myNewMap.entries(); _f < _g.length; _f++) {
    var _h = _g[_f], key_2 = _h[0], value = _h[1];
    console.log(key_2 + " -> " + value);
}
//# sourceMappingURL=tutorial33.js.map