interface Todo{
    text:string;
    completed:boolean;
}

const btn=document.getElementById('btn') as HTMLButtonElement;
const input=document.getElementById('todoinput') as HTMLInputElement;
const form=document.querySelector('#todoform') as HTMLFormElement
const todolist=document.querySelector('#todolist')!;

const todos:Todo[]=readTodos();
todos.forEach(createTodo)

function readTodos():Todo[]{
    const todosJSON=localStorage.getItem("todos");
    if(todosJSON===null){
        return [];
    }
    return JSON.parse(todosJSON);   
}

function saveTodo(){
    localStorage.setItem("todos",JSON.stringify(todos))
}

function handleSubmit(e:SubmitEvent){
e.preventDefault();
const newTodoo:Todo={
    text:input.value,
    completed:false,
}
createTodo(newTodoo)
todos.push(newTodoo);
saveTodo();
input.value="";
}

function createTodo(todo:Todo){
const newTodo=document.createElement('li');
const checkbox=document.createElement('input');
checkbox.type='checkbox';
checkbox.checked=todo.completed;
checkbox.addEventListener('change',()=>{
    todo.completed=checkbox.checked;
    saveTodo();
})
newTodo.append(todo.text);
newTodo.append(checkbox);
todolist.append(newTodo);
}

form.addEventListener('submit',handleSubmit);

