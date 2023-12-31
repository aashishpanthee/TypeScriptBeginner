// Tuples
// Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
// For example, you may want to represent a value as a pair of a string and a number:

// Tuples are a special type exclusive to TypeScript (they dont't exist in JS)
// Tuples are arrays of fixed length and ordered with specific types-like super rigid arrays.
// Tuples are not used very often in TS, but they are used in React with useState hook.

const myArray:number[]=[1,2,3,4]
// here we have an array of numbers, but if we want only three numbers in an array then it's not possible or can get little bit tricky
//so we can use tuples here. 
// tuples not only makes sure that we have only three numbers in an array but also makes sure that the order of the numbers is correct.
let myTuple:[number,string];
myTuple=[1,"hello"];
// myTuple=["hello",2] here we get an error because of the order of the types in the tuple

const color:[number,number,number]=[255,255,1];
// const color:[number,number,number]=[255,255,1,4]; it will cause error because we have only three numbers in the tuple

type MyTuple=[number,string];
// let status code
const httpStatus:MyTuple=[200,"OK"];
httpStatus.push(22); //yes, it is the limitation, now it doesn't follow the pattern.
httpStatus.pop();
httpStatus.pop();
httpStatus.pop();
httpStatus.pop();
// this is just an exception. It is not a good practice to use push and pop in tuples.
console.log(httpStatus);

const response:MyTuple[]=[[200,"h"],[201,"created"]];
