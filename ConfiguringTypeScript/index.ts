// to init config file:    tsc --init
// to watch compilation of ts file / automatically recompile the typescript file:       tsc --watch
// If all the files are in the same directory , then we can use this command to compile all the files:   tsc   OR  tsc --watch with all the dot.ts files 



interface Chicken{
    name:string;
    breed:string;
    eggsPerWeek:number;
    age:number;
}
const chicken:Chicken={
    name:"Coocook",
    breed:"Rhode Red",
    eggsPerWeek:5,
    age:5,
}