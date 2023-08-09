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

// Interface Methods

interface Person2{
    name:string;
    age:number;
    greet:()=>string;
}
const shelby:Person2={name:"Thomas",age:36,greet:()=>{return "Hello"}};
console.log(shelby);

// Interface Method Parameters

interface Product{
    name:string;
    price:number;
    applyDiscount:(discount:number)=>number;
}

const shoes:Product={
    name:"Nike",
    price:200,
    applyDiscount(amount:number){
        const newPrice=this.price*(1-amount);
        this.price=newPrice;
        return this.price;
    }
}
console.log(shoes.applyDiscount(0.6));

// Re-Opening Interfaces

// RE-OPENING TYPE ALIAS IN NOT POSSIBLE
// for example this, Animal interface is coming from anothe file, now i want to add that interface in this file and add some more properties in it

interface Animal{
name:string;
age:number;
}


// This below Animal interface is not overriding and overwriting the above Animal interface.,it's just adding more properties in it.
interface Animal{
    breed:string;
    bark():string;
}

const coco:Animal={
    name:"Coco",
    age:1.5,
    breed:"Cocor Spinal",
    bark(){
        return "Woof Woof"
    }

}

// Extending Interfaces 

interface ServiceDog extends Animal{
job:"drug sniffer" |"bomb sniffer";
}

const chewy:ServiceDog={
    name:"Chewy",
    age:4.5,
    breed:"Labrador",
    bark(){
        return "bark"
    },
    job:"bomb sniffer",
}
console.log(chewy); 

// NOTE: WE CAN EXTEND MULTIPLE INTERFACES

interface LookingDog extends Animal,ServiceDog{
    lookforDrugs():string;
}
const coco1:LookingDog={
    name:"Chewy",
    age:4.5,
    breed:"Labrador",
    bark(){
        return "bark"
    },
    job:"bomb sniffer",
    lookforDrugs(){
        return "Drugs Drugs"
    }
}
console.log(coco1);

