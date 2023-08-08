// Union Types 
/* Union types allow us to give a value a few different possible types.
We can create a union type using the pipe character (|) ti separate the types
we want to include.
It's like saying , "This thing is allowed to be this, this, or this".
TypeScript will figure out the type based on what actually gets stored in the variable. */
var age = 25;
age = "twenty five";
age = 23;
age = true;
var coordinates = {
    x: 1, y: 34
};
coordinates = { lat: 321.33, long: 442.44 };
// Union Type With Functions
function printAge(age) {
    console.log("Age is ".concat(age));
}
;
printAge(23);
printAge("twenty three");
// Unions- Narrowing the Type 
/* Narrowing the Type is simply doing a type check before working with a value.
If your value is a string you may want to use it differently than if you got a number.
Since unions allow multiple types for a value, it's good to check what came
through before working with it. */
function calculateTax(price, tax) {
    // return price*tax;   here , price could be number or string, if it is string, then it will give error.
    // so Type Narrowing is needed here,
    if (typeof price === "string") {
        price = parseFloat(price.replace("$", ""));
    }
    return price * tax;
}
console.log(calculateTax(45, 0.5));
console.log(calculateTax("$45", 0.5));
// Union Types and Arrays
var nums = [1, 2, 3];
// what if we want both number and strings or objects in an array ?
var stuff = [1, "two", true, { x: 2, y: 4 }];
// this is correct, but we should avoid the ` Type any ` as much as possible
var mixed = [1, "two", true, "four", false, 4];
var coordinates1 = [];
coordinates1.push({ x: 433.44, y: 434.33 });
coordinates1.push({ lat: 567.36, long: 234.45 });
// coordinates1.push({lat:567.36,long:234.45,some:444}); this will throw error because some is not in the type Loc or Point 
// Literal Types
/* Literal types allow you to specify exactly what a variable can be.
This is done by using the value as a type. */
var zero = 0;
// zero=1;  this will throw error because zero can only be 0
var hi = "hello";
// hi="hi"; hi variable is of tyep "hello" so it can only be hello
// A function with a literal + union type parameter
// Literal types are not just types-but the values themselves too.
var printText = function (text) {
    console.log("The name can be ".concat(text));
};
printText("aashish");
// printText("sujan");  assignment of type "sujan" parameter of type "aaashish" parameter is not applicable
var mood = "happy"; // mood can only be happy or sad
// mood="angry";  this will throw error because mood can only be happy or sad
mood = "sad";
console.log(mood);
var day = "Monday";
// let day2:WeekendDays="Friday";  this will throw error because day2 can only be Monday,Tuesday or Wednesday
// Union Types Exercise
// Create a variable called highScore that can be a number OR a boolean
var highScore;
highScore = 23;
highScore = false;
// Create an array called stuffss
// it can be an array of numbers OR array of strings
// it cannot be an array of numbers and string (mixed together)
var stuffss = [1, 2, 3];
// let us take name of array different 
var stuffff = ["hello", "aasish"];
// Create an array called colors that can hold a mixture of RGB and HSL color types
var colors = [];
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array
// with the same format
var greet = function (name) {
    if (typeof name === "string") {
        console.log("Hello, ".concat(name));
    }
    else {
        for (var _i = 0, name_1 = name; _i < name_1.length; _i++) {
            var names = name_1[_i];
            console.log("Hello, ".concat(names));
        }
    }
};
greet("aashish");
greet(["aashish", "sumit", "ashok"]);
