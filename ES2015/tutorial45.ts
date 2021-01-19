//Enumeration -> simply use to give friendly name to numeric value and create specific type for variable

enum EyeColor {
    Brown=1,Black=5,Blue=10
}; // assign 0,1,2 if not defined

var myEyeColor = EyeColor.Brown;

console.log(myEyeColor);

console.log(EyeColor[myEyeColor]); //to get name gives brown

