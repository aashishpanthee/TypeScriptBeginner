// Object type annotation
let coordinate : {x:number,y:number}={x:20,y:50};

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

// Nested Objects type Alias
// both these functions want same object, so why to give type annotation for a function parameter individually,
//  instead create a type alias

type Song={
    title:string;
    artist:string;
    numStreams:number;
    credits:{
        producer:string;
        writer:string;
    }
}

const mysong:Song={
    title:"Aashish",artist:"Panthee",numStreams:100,credits:{producer:"Aashish",writer:"Panthee",
}};

function calculatePayout(song:Song):number{
return song.numStreams*1;
}
let resul=calculatePayout(mysong);
console.log(resul);

const printSong=(song:Song):void=>{
console.log(`${song.title} by ${song.artist} has ${song.numStreams} streams`);
}
printSong(mysong);

// Optional Property in object
// we can make a property optional by adding ? after the property name
type Person2={
    name:string;
    age:number;
    grade?:number /* this is optional property */
}
const person2:Person2={name:"Aashish",age:22,grade:12};
const person3:Person2={name:"Aashish",age:22};  /* this is also correct */

// Read Only Modifier

type User={
    readonly id:number;
    username:string;
}
const user:User={
    id:123,
    username:"Aashish"
}
console.log(user);
console.log(user.id);
/* user.id=333;     this will throw error because id is readonly */

// Intersection type

type Circle={
    radius:number;
};

type Colorful={
    color:string;
};

type ColorfulCircle= Circle & Colorful & {
    border:number ; /* this is extra property declared only for ColorfulCircle*/
}; /* this is intersection type */

const happyFace:ColorfulCircle={
    radius:43,
    color:"red",
    border:5,
}


