"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('#todoform');
function handleSubmit(e) {
    e.preventDefault();
    console.log('Submitted');
}
form.addEventListener('submit', handleSubmit);
// --------------OR-----------------
/* form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Submitted');
}) */
