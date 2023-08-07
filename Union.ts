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

