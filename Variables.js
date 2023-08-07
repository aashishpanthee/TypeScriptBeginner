// Type Annotations
var favouriteMovie = "Interstellar";
favouriteMovie = "Inception";
console.log(favouriteMovie);
favouriteMovie = 98; /* type Number is not assignable to type String */
favouriteMovie.round(); /* Property 'round' does not exist on type 'string' */
var numCatLives = 0;
numCatLives += 1;
numCatLives = "hello"; /* type String is not assignable to type Number */
// Type Inference
/* it's the ability of the programming language to figure out what type of data a
   variable holds based on the context
   and the value it is assigned  without the need for explicit type annotations.
 */
var tvShow = 'Friends';
tvShow = 'Breaking Bad';
tvShow = 80; /* type Number is not assignable to type String */
// The any Type
// It turns off type checking for this variable so you can do your thing.
var thing = "hello";
thing = 5;
thing();
thing.toUpperCase();
thing = false;
// Delayed Initialization and Implicit any Type
var array1 = ["Breaking Bad", "Loki", "Oppenheimer", "The Wire"];
var favourite; /* type any */ /* Variable fovourite implicitly has any Type */
for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
    var movie = array1_1[_i];
    if (movie === "Loki") {
        favourite = movie;
    }
}
// so we can do this too. bad but,
favourite = 1;
favourite();
// so this can be bit dangerous. so we can use any type but it's not recommended.
// Function Parameter Annotation
// Previously what we do/did
function printNumber(num) {
    console.log("My favourite number is ".concat(num));
}
printNumber("ten");
// Output : My favourite number is ten
// Now here what we do
function printNumber1(num) {
    console.log("My favourite number is ".concat(num));
    num.toUpperCase(); /* Property 'toUpperCase' does not exist on type 'number' */
}
printNumber1(10);
// Output : My favourite number is 10
printNumber1("ten"); /* Argument of type 'string' is not assignable to parameter of type 'number' */
var doSomething = function (name, age, isFunny) {
    console.log("Hello ".concat(name, " of age ").concat(age, " is not funny which is ").concat(isFunny));
};
doSomething("ChickenFace", 20, true); /* Output is correct */
doSomething("ChickenFace"); /* Expected 3 arguments, but got 1. */
// Function with Default Parameters
var greetMe = function (name) {
    if (name === void 0) { name = "stranger"; }
    console.log("Greet me ".concat(name));
};
greetMe(); /* Output : Greet me stranger */
// Function Return Type Annotation
var add = function (a, b) {
    return a + b;
};
var sum = add(10, 20); /* Output : 30 */
var rando = function (a) {
    if (Math.random() < 0.5) {
        return a.toString();
    }
    return a;
};
