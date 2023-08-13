function numberIdentity(item:number):number{
return item;
}
function stringIdentity(item:string):string{
    return item;
}
function booleanIdentity(item:boolean):boolean{
    return item;
}
// So making individual function for each type is not good practice, sand using any type is also not good practice.
function identity(item:any):any{
    return item;
    // here , if we pass number type then, it is not sure that it will return number type, it can return string type too.
}
//--
//--
// NOTE::::::::::::::::::GENERIC FUNCTION :::::::::::::::::::::::::::::::
// So, below here, it is generic function which can take any type of argument and return same type of argument.
function Identity<Type>(item:Type):Type{
    return item;
}
// this is generic function.
const number1=Identity<number>(10);
console.log(number1);

const string1=Identity<string>("Ten");
console.log(string1);


interface Dog{
    name:string;
    breed:string;
}

const doggy1=Identity<Dog>({name:"CoCo",breed:"Cocor Spinal"});
console.log(doggy1);


function getRandomElement<T>(list:T[]):T{
    const index=Math.floor(Math.random()*list.length);
    return list[index];
}
console.log(getRandomElement<string>(["a","b","c"]))
console.log(getRandomElement<number>([1,2,3,5,6]))

function merge<T,U>(obj1:T,obj2:U){
    return {
        ...obj1,...obj2
    }
}
const comboObj=merge({name:"Rahul"},{age:23});
console.log(comboObj);
