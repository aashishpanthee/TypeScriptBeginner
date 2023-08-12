"use strict";
// Non-Null Assertion Operator 
// !  Non-Null Assertion Operator
// This operator is used to tell the compiler that the value is guaranteed to be not null;
// NOTE : This operator is only used in TypeScript and not in JavaScript.
// OR WE CAN USE OPTIONAL CHAINING OPERATOR (?.) INSTEAD OF NON-NULL ASSERTION OPERATOR (!)
/* const btn=document.getElementById('btn')!
console.log(btn);
btn.addEventListener('click',()=>{
    alert("Clicked !!")
})
This is using NON-NULL ASSERTION OPERATOR (!)
*/
/* const btn=document.getElementById('btn');
console.log(btn);
btn?Listener('click',()=>{
    alert("Clicked !!")
})
This is using OPTIONAL CHAINING OPERATOR (!)
*/
// Type Assertion
// let mystery:unknown="HelloWorld!";
// let numCharacter=(mystery as string).length;
// This is type assertion
//If we had not used type assertion , then it would show us type error that mystery is of type unknown. but we are making MYSTERY AS STRING using type assertion
/*
----------ANOTHER EXAMPLE OF TYPE ASSERTION-----------------
const btn=document.getElementById('btn') as HTMLButtonElement;
const input=document.getElementById('todoinput') as HTMLInputElement;
btn?.addEventListener('click',()=>{
    alert(input.value);
    input.value="";
})
*/
