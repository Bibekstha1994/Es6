//Enumeration -> simply use to give friendly name to numeric value and create specific type for variable
var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Brown"] = 1] = "Brown";
    EyeColor[EyeColor["Black"] = 5] = "Black";
    EyeColor[EyeColor["Blue"] = 10] = "Blue";
})(EyeColor || (EyeColor = {}));
; // assign 0,1,2 if not defined
var myEyeColor = EyeColor.Brown;
console.log(myEyeColor);
console.log(EyeColor[myEyeColor]); //to get name gives brown
//# sourceMappingURL=tutorial45.js.map