const btn=document.getElementById('btn') as HTMLButtonElement;
const input=document.getElementById('todoinput') as HTMLInputElement;
const form=document.querySelector('#todoform') as HTMLFormElement
const todolist=document.querySelector('#todolist')!;
function handleSubmit(e:SubmitEvent){
e.preventDefault();
const todotext=input.value;
const newTodo=document.createElement('li');
const checkbox=document.createElement('input');
checkbox.type='checkbox';
newTodo.append(todotext);
newTodo.append(checkbox);
todolist.append(newTodo);
input.value="";
}
form.addEventListener('submit',handleSubmit);

