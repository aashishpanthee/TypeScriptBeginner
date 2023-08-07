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
