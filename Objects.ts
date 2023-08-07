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



// Type Alias
/* Instead of writing out object types in an annotation, we can declare them separately in a type alias,
 which is simply desired shape of the obect */

// type alias
type Person={
    firstName:string;
    lastName:string;
    grade:number;
}

type Point={
    x:number;
    y:number;
}

let person1:Person={firstName:"Aashish",lastName:"Panthee",grade:12};
console.log(person1);


// Type alias with function parameter
const printPerson=(person:Person):void=>{
    console.log(`${person.firstName} ${person.lastName} reads in class ${person.grade}`)
}
printPerson({firstName:"Aashish",lastName:"Panthee",grade:12});


function doublePoint(point:Point):Point{
    return {x:point.x*2,y:point.y*2}
}
let poi=doublePoint({x:10,y:10});
console.log(poi);