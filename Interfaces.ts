// Interfaces allows us to describe the shape of objects and only objects
// Objects that have different properties and even methods in there
// We can use them to create reusabble,modular types that describe the shapes of objects
 
/* 
type Person={
    name:string;
    age:number;
}
*/
// REMEMBER: THERE IS NOT EQUAL TO SIGN IN INTERFACES
interface Person{
    name:string;
    age:number;
}

const person:Person={
    name:"Aashish",
    age:22,
}