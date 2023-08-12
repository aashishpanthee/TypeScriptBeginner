"use strict";
const btn = document.getElementById('btn');
const input = document.getElementById('todoinput');
const form = document.querySelector('#todoform');
const todolist = document.querySelector('#todolist');
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null) {
        return [];
    }
    return JSON.parse(todosJSON);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodoo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodoo);
    todos.push(newTodoo);
    localStorage.setItem("todos", JSON.stringify(todos));
    input.value = "";
}
function createTodo(todo) {
    const newTodo = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    newTodo.append(todo.text);
    newTodo.append(checkbox);
    todolist.append(newTodo);
}
form.addEventListener('submit', handleSubmit);
