
import checkComplete from "../Componentes/checkComplete.js";
import deleteIcon from "../Componentes/deleteicon.js";

( ()=> {
const btn = document.querySelector("[data-form-btn]");


const createTask = (evento) =>{
    evento.preventDefault();//
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add('card');
    input.value = "";
    //creamos el div
    const taskContent = document.createElement('div');
    //creamos el span 
    const titleTask = document.createElement('span');
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
  //task.innerHTML = content; //inserta una etiqueta html
  task.appendChild(taskContent);
  task.appendChild(deleteIcon());
  list.appendChild(task); //agrega un nodo al hijo  
}
btn.addEventListener('click', createTask);


})();





