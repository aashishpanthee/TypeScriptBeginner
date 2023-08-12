"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('#todoform');
const todolist = document.querySelector('#todolist');
function handleSubmit(e) {
    e.preventDefault();
    const todotext = input.value;
    const newTodo = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newTodo.append(todotext);
    newTodo.append(checkbox);
    todolist.append(newTodo);
    input.value = "";
}
form.addEventListener('submit', handleSubmit);
