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


const doSomething=(name:string,age:number,isFunny:boolean){
    console.log(`Hello ${name} of age ${age} is not funny which is ${isFunny}`);
};
doSomething("ChickenFace",20,true); /* Output is correct */
doSomething("ChickenFace"); /* Expected 3 arguments, but got 1. */


// Function with Default Parameters
const greetMe=(name:string="stranger")=>{
    console.log(`Greet me ${name}`);
}
greetMe();      /* Output : Greet me stranger */

// Function Return Type Annotation
const add=(a:number,b:number):number=>{
    return a+b;
}
let sum=add(10,20); /* Output : 30 */

const rando=(a:number)=>{  /* Here typescript is smart enought to know that return type of this function could be string or number, by hovering function name , you could know that */
    if(Math.random()<0.5){
        return a.toString();
    }
    return a;
}

// Anonymous Function Contextual Typing
const names=["Aashish","Sumit","Sagar","Aryal"];
names.map(name=>{  /* Typescript can infer it's parameter type by looking at the array of strings, here we 
                    do not specify type of name, but also typescript infers it's type of name as string */
    return name.toUpperCase();
    //  return name.toFixed(); /* Property 'toFixed' does not exist on type 'string' */
})

const mixed=["Aashish",10,"Prem"];
mixed.map(mix=>{  /* when we hover over mix, it show type of mix as string or number but method like toUpperCase does not work on number */
    return mix.toUpperCase(); /* Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'. */ 
})

// Never Type
// We might use it to anotate a function that always throws an exception, or a function that never stops executing.
/* function gameLoop():never{  This function never returns anything, it just runs forever 
    while(true){
        console.log("Game is running");
    }
} */
