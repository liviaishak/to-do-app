function onReady(){
 let toDos = [];
 let id = 0;

const addToDoForm = document.getElementById('addToDoForm');
const newToDoText = document.getElementById('newToDoText');




function createNewToDo(){
  if (!newToDoText.value) { return; }

   toDos.push({
     title:newToDoText.value,
     complete: false,
     id: ++id
   });

   newToDoText.value = '';

   renderTheUI();
 }

function deleteToDo(id){
  toDos.filter(toDo => toDo.id !== id);
}
 function renderTheUI() {
   const toDoList = document.getElementById('toDoList');

   toDoList.textContent = '';

   toDos.forEach(function(toDo) {
     const newLi = document.createElement('li');

     const checkbox = document.createElement('input');
     checkbox.type = "checkbox";

     // create delete button
     let removeItem = document.createElement('button')
     removeItem.textContent = "Remove";

     newLi.textContent = toDo.title;
     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
     newLi.appendChild(removeItem);

     removeItem.addEventListener('click', () => {
       toDos = deleteToDo(toDo.id);
       renderTheUI();
     })
   });
 }

 addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
   newToDoText.value = '';
   renderTheUI();
 });

renderTheUI();
}


window.onload = function() {
 onReady();
};
