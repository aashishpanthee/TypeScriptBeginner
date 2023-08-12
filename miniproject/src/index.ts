const btn=document.getElementById('btn') as HTMLButtonElement;
const input=document.getElementById('todoinput') as HTMLInputElement;
const form=document.querySelector('#todoform') as HTMLFormElement
function handleSubmit(e:SubmitEvent){
e.preventDefault();
console.log('Submitted');

}
form.addEventListener('submit',handleSubmit);
// --------------OR-----------------
/* form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log('Submitted');
}) */
