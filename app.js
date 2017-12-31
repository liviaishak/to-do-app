function onReady(){
 let toDos = [];
 let id = 0;

 const addToDoForm = document.getElementById('addToDoForm');
 const newToDoText = document.getElementById('newToDoText');
 const toDoList = document.getElementById('toDoList');

function createNewToDo(){
  if (!newToDoText.value) { return; }
  id++;

   toDos.push({
     title:newToDoText.value,
     complete: false,
     id: id
   });

   newToDoText.value = '';

   renderTheUI();
 }

 function renderTheUI() {
   const toDoList = document.getElementById('toDoList');

   toDoList.textContent = '';

   toDos.forEach(function(toDo) {
     const newLi = document.createElement('li');

     const checkbox = document.createElement('input');
     checkbox.type = "checkbox";

   //create delete button
  let removeItem = document.createElement('button')
  removeItem.type = "button";
  removeItem.textContent = "Remove";

  //append it to newli
  newLi.textContent = toDo.title;
  toDoList.appendChild(newLi);
  newLi.appendChild(checkbox);

  newLi.appendChild(removeItem);

  //add function to delete button
  removeItem.addEventListener('click', event => {
    toDos = toDos.filter(function(el) {
      return el.id !== toDo.id;
    });

    //call renderTheUI()
  renderTheUI();
  })

     newLi.textContent = toDo.title;
     toDoList.appendChild(newLi);
     newLi.appendChild(checkbox);
   });
 }

 addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
   newToDoText.value = '';
 });

}


window.onload = function() {
 onReady();
};
