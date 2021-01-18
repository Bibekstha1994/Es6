//Rest operators
// let displayColors = function(){
//     console.log(message);
//     for(let i in arguments){
//         console.log(arguments[i]);
//     }
// }
// let message = 'list of Colors'
// displayColors(message,'Red');
// displayColors(message,'Red','Blue');
// displayColors(message,'Red','Blue','Green');
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = 'list of Colors';
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
//# sourceMappingURL=tutorial13.js.map