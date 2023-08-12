interface Todo{
    text:string;
    completed:boolean;
}

const todos:Todo[]=[];

const btn=document.getElementById('btn') as HTMLButtonElement;
const input=document.getElementById('todoinput') as HTMLInputElement;
const form=document.querySelector('#todoform') as HTMLFormElement
const todolist=document.querySelector('#todolist')!;

function handleSubmit(e:SubmitEvent){
e.preventDefault();
const newTodoo:Todo={
    text:input.value,
    completed:false,
}
createTodo(newTodoo)
todos.push(newTodoo);
input.value="";
}

function createTodo(todo:Todo){
const newTodo=document.createElement('li');
const checkbox=document.createElement('input');
checkbox.type='checkbox';
newTodo.append(todo.text);
newTodo.append(checkbox);
todolist.append(newTodo);
}

form.addEventListener('submit',handleSubmit);

