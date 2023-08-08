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

// Union Types Exercise
// Create a variable called highScore that can be a number OR a boolean
let highScore:number|boolean;
highScore=23;
highScore=false;

// Create an array called stuffss
// it can be an array of numbers OR array of strings
// it cannot be an array of numbers and string (mixed together)

let stuffss:string[]|number[]=[1,2,3];
// let us take name of array different 
let stuffff:string[]|number[]=["hello","aasish"];
/* let stuffa:Array<number|string>=[];
let stuffa:(number|string)[]=[];
this will allow mixed array of like number of string
stuffa.push(1);
stuffa.push("two"); */


// Create a literal type called Skilllevel
// There are 4 allowed values: "Beginner","Intermediate","Advanced","Expert";
type Skilllevel="Beginner"|"Intermediate"|"Intermediate"|"Advanced"|"Expert"

// Create a type called SkiSchoolStuent
// name must be string
// age must be number
// sport must be 'ski' or 'snowboard'
// level must be a value from the SkillLevel type

type SkiSchoolStudent={
    name:string;
    age:number;
    sport:"ski"|"snowboard";
    level:Skilllevel;
}

// Define a type to represent an HSL color
// r should be a number
// s should be a number
// l should be a number

type HSL={
    H:number;
    S:number;
    L:number;
}
// Define a type to represent an RGB color
// R should be a number
// G should be a number 
// B should be a number

type RGB={
    R:number;
    G:number;
    B:number;
}

// Create an array called colors that can hold a mixture of RGB and HSL color types
let colors:(HSL|RGB)[]=[]; 


// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array
// with the same format

const greet=(name:string|string[])=>{
    if(typeof name ==="string"){
        console.log(`Hello, ${name}`)
    }else{
        for(let names of name){
            console.log(`Hello, ${names}`);
        }
    }
}
greet("aashish");
greet(["aashish","sumit","ashok"]);
