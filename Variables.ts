// Type Annotations
let favouriteMovie:string="Interstellar";
favouriteMovie="Inception";
console.log(favouriteMovie);
favouriteMovie=98;   /* type Number is not assignable to type String */
favouriteMovie.round();  /* Property 'round' does not exist on type 'string' */

let numCatLives:number=0;
numCatLives+=1;
numCatLives="hello"; /* type String is not assignable to type Number */


// Type Inference
/* it's the ability of the programming language to figure out what type of data a 
   variable holds based on the context 
   and the value it is assigned  without the need for explicit type annotations.
 */
let tvShow='Friends';
tvShow='Breaking Bad';
tvShow=80; /* type Number is not assignable to type String */


// The any Type
// It turns off type checking for this variable so you can do your thing.
let thing:any="hello";
thing=5;
thing();
thing.toUpperCase();
thing=false;


// Delayed Initialization and Implicit any Type
const array1=["Breaking Bad","Loki","Oppenheimer","The Wire"];
let favourite; /* type any */  /* Variable fovourite implicitly has any Type */
for (let movie of array1){
    if(movie==="Loki"){
        favourite=movie;
    }
}
// so we can do this too. bad but,
favourite=1; 
favourite(); 
// so this can be bit dangerous. so we can use any type but it's not recommended.


// Function Parameter Annotation
// Previously what we do/did
function printNumber(num){
    console.log(`My favourite number is ${num}`);
}
printNumber("ten");
// Output : My favourite number is ten

// Now here what we do
function printNumber1(num:number){
    console.log(`My favourite number is ${num}`);
    num.toUpperCase(); /* Property 'toUpperCase' does not exist on type 'number' */
}
printNumber1(10);
// Output : My favourite number is 10

printNumber1("ten"); /* Argument of type 'string' is not assignable to parameter of type 'number' */
