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
