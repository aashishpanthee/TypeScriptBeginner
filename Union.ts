// Union Types 
/* Union types allow us to give a value a few different possible types.
We can create a union type using the pipe character (|) ti separate the types 
we want to include.
It's like saying , "This thing is allowed to be this, this, or this".
TypeScript will figure out the type based on what actually gets stored in the variable. */

let age:number | string | boolean=25;
age="twenty five";
age=23;
age=true;

type Point={
    x:number;
    y:number;
}

type Loc={
    lat:number;
    long:number;
}

let coordinates:Point|Loc={
    x:1,y:34
}
coordinates={lat:321.33,long:442.44 }

// Union Type With Functions

function printAge(age:number|string):void{
    console.log(`Age is ${age}`);
};
printAge(23);
printAge("twenty three");

// Unions- Narrowing the Type 
/* Narrowing the Type is simply doing a type check before working with a value.
If your value is a string you may want to use it differently than if you got a number.
Since unions allow multiple types for a value, it's good to check what came 
through before working with it. */ 

function calculateTax(price:number|string,tax:number):number{
    // return price*tax;   here , price could be number or string, if it is string, then it will give error.
    // so Type Narrowing is needed here,
    if(typeof price==="string"){
        price=parseFloat(price.replace("$",""));
    }
    return price*tax;
}

console.log(calculateTax(45,0.5));
console.log(calculateTax("$45",0.5));


// Union Types and Arrays

const nums:number[]=[1,2,3];
// what if we want both number and strings or objects in an array ?
const stuff:any[]=[1,"two",true,{x:2,y:4}];
// this is correct, but we should avoid the ` Type any ` as much as possible

const mixed:(number|string|boolean)[]=[1,"two",true,"four",false,4];

const coordinates1:(Point|Loc)[]=[];
coordinates1.push({x:433.44,y:434.33});
coordinates1.push({lat:567.36,long:234.45});
// coordinates1.push({lat:567.36,long:234.45,some:444}); this will throw error because some is not in the type Loc or Point 

// Literal Types
/* Literal types allow you to specify exactly what a variable can be.
This is done by using the value as a type. */
let zero:0=0;
// zero=1;  this will throw error because zero can only be 0
let hi:"hello"="hello";
// hi="hi"; hi variable is of tyep "hello" so it can only be hello

// A function with a literal + union type parameter
// Literal types are not just types-but the values themselves too.
const printText=(text:"aashish"|"sumit"|"ashok")=>{
    console.log(`The name can be ${text}`);
}
printText("aashish");
// printText("sujan");  assignment of type "sujan" parameter of type "aaashish" parameter is not applicable

let mood:"happy"|"sad"="happy"; // mood can only be happy or sad
// mood="angry";  this will throw error because mood can only be happy or sad
mood="sad";
console.log(mood);

type WeekendDays="Monday"|"Tuesday"|"Wednesday";
let day:WeekendDays="Monday";
// let day2:WeekendDays="Friday";  this will throw error because day2 can only be Monday,Tuesday or Wednesday

