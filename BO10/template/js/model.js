  btnAddTask.addEventListener('click', function () {
  formAddTask.style.display = "block";
  btnAddTask.style.display = "none";
  closeTask.style.display = "block";
  }) 

  closeTask.addEventListener('click', function () {
  formAddTask.style.display = "none";
  btnAddTask.style.display = "block";
  closeTask.style.display = "none";
  }) 

  let tasks = getLocalStorage();
  renderTask(tasks);

  function randomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

}

  
// FUNCTION SUBMIT

ELEMENT_SUBMIT.addEventListener("click", function() {

  if (!ELEMENT_inputTask.value) {
    alert("Vui lòng nhập task");
    return false;
  }
  if (!ELEMENT_Select.value) {
    alert("Vui lòng nhập level");
    return false;
  }

  let tasks = getLocalStorage();

  let taskID=this.getAttribute("id");

  let id= taskID? taskID :randomString(20);
 
  if(taskID){
    tasks[taskID]={
        id,
        name: ELEMENT_inputTask.value,
        level: ELEMENT_Select.value,
    }
    console.log(tasks[taskID]);
    this.removeAttribute('id')
    localStorage.setItem("tasks", JSON.stringify(tasks));
     renderTask(tasks)

    }
    else{
      tasks.push({
        id,
        name: ELEMENT_inputTask.value,
        level: ELEMENT_Select.value,
      });
      
    }
  ELEMENT_SUBMIT.innerHTML='Submit'
  
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask(tasks);
  resetForm()
  });
  
// EDIT TASKS

const getId= (id)=>{
  let tasks = getLocalStorage();
  return tasks.find(task=>task.id === id);

}
const showEditForm=(id)=>{

  let item=getId(id)
  formAddTask.style.display = "block";
  btnAddTask.style.display = "none";
  closeTask.style.display = "block";
  showItemForm(item)

}

const showItemForm=(item)=>{
 
    ELEMENT_inputTask.value = item.name;
    ELEMENT_INPUT_ID.value= item.id;
    ELEMENT_Select.value=item.level;
    ELEMENT_SUBMIT.setAttribute("id",item.id);

}

  // FUNCTION RENDERTASK
  function renderTask(tasks) {
    let content = "";
    tasks.forEach(function(task, index) {
      let id=task.id;
      return content += `<tr>
          <td class="text-center">${index + 1}</td>
          <td>${task.name}</td>
          <td class="text-center">
          <span id="ele" class="label ${task.level}" >${task.level}</span>
          </td>
          <td>
              <button type="button" class="btn btn-warning" onclick="showEditForm('${id}')">Edit</button>
              <button type="button" class="btn btn-danger" onclick="deleteTask('${index}')">Delete</button>
          </td>
          </tr> `;
    });
    document.querySelector("#taskRow").innerHTML = content;
  }


// function editTask(id) {

//   let tasks = getLocalStorage();

//   formAddTask.style.display = "block";
//   btnAddTask.style.display = "none";
//   closeTask.style.display = "block";

//   if (tasks.length > 0) {
//     // ELEMENT_inputTask.value = item.name;
//     // ELEMENT_Select.value = item.level;
//     ELEMENT_SUBMIT.setAttribute("id", id);
//   }

//   ELEMENT_SUBMIT.innerText="Update"
 
// }

// FUNCTION SORT
function ascendingTask(){

  let tasks = getLocalStorage();

  let valueSelect=document.getElementById('sort').value;

  tasks.sort((a,b)=>{
 
  if(valueSelect==="az"){
    return a.name.localeCompare(b.name)
  }
  else if(valueSelect==="za"){
    return b.name.localeCompare(a.name)
  }
  else if(valueSelect === "levelHigh"){
    return a.level.localeCompare(b.level)
  }
  else if(valueSelect === "Highlevel"){
    return b.level.localeCompare(a.level)

  }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask(getLocalStorage())
}

  // FUNCTION SEARCH TASKS
  function searchFunction() {
    let valueSearchInput = document.getElementById("search").value;
    let tasks = getLocalStorage();
    var filterTasks= tasks.filter(function (value) {
  return value.name.toUpperCase().includes(valueSearchInput.toUpperCase());
    
 }
 )
 localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(filterTasks);
}
  // FUNCTION RESET
  function resetForm() {
  ELEMENT_inputTask.value = "";
  ELEMENT_Select.value = "Small";

  }

// DELETE TASKS

  function deleteTask(id) {
    console.log(id);
   
    
  if (confirm("Are you sure want to delete")) {
    let tasks = getLocalStorage();
    tasks.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(getLocalStorage());
  }
}

  // FUNCTION CANCEL FORM
 
   function cancelForm() {
    formAddTask.style.display = "none";
    btnAddTask.style.display = "block";
    closeTask.style.display = "none";
    resetForm()
    }

    function getLocalStorage() {
      return localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")): [];
    }