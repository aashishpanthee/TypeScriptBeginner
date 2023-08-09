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

// We can add optional properties in interfaces as well

interface Person1{
   readonly id:number; //Readonly modifier
    name:string;
    age:number;
    nickname?:string; // Optional property
}

const thomas:Person1={name:"Thomas",age:36,id:223};
console.log(thomas);
// thomas.id=555;  // Cannot assign to 'id' because it is a read-only property.
