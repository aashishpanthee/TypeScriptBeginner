// Object type annotation
let coordinate:{x:number,y:number}={x:20,y:50};

//  A function with an object type parameter
const object1=(person: {first:string,last:string}):void=>{
    console.log(`${person.first} ${person.last}`);
}
object1({first:"Aashish",last:"Panthee"});

// Return Type Annotation
// const printCoord=():{x:number,y:number}=>{   /* here the return type is object  */
//     return true;     /* so if we return any other thing than object , then it will throw error */
//     return {x:Math.random(),y:Math.random()};  /* this is correct */
// }
