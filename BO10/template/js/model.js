const handleToggleForm = (close = true) => {
  if (close) {
    formAddTask.style.display = "block";
    btnAddTask.style.background = "red";
    btnAddTask.innerHTML = "Close Task";
  } else {
    formAddTask.style.display = "none";
    btnAddTask.style.background = "#5bc0de";
    btnAddTask.innerHTML = "Add Task";
  }
};

let tasks = getLocalStorage();
renderTask(tasks);

// FUNCTION SUBMIT

ELEMENT_SUBMIT.addEventListener("click", function () {
  if (!ELEMENT_inputTask.value) {
    alert("Hãy nhập task");
    return false;
  }
  if (!ELEMENT_Select.value) {
    alert("Hãy nhập level");
    return false;
  }
  
  let taskID = this.getAttribute("id");
  
  let tasks = getLocalStorage();

  if (taskID ===0 || taskID) {
    tasks[taskID] = {
      id: "id",
      name: ELEMENT_inputTask.value,
      level: ELEMENT_Select.value,
    };
   
    this.removeAttribute("id");
  }
  else {
    tasks.push({
      id: "id",
      name: ELEMENT_inputTask.value,
      level: ELEMENT_Select.value,
    });
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTask(tasks);
});


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
// function searchTask() {
//   let valueSearchInput = document.getElementById("search").value;
//   let taskSearch = tasks.filter(function (value) {
//     return value.name.toUpperCase().includes(valueSearchInput.toUpperCase());
//   });
//   renderTask(taskSearch);
// }
// EDIT TASKS


function editTask(id) {

  let tasks = getLocalStorage();


  if (tasks.length > 0) {
    ELEMENT_inputTask.value = tasks[id].name;
    ELEMENT_Select.value = tasks[id].level;
    ELEMENT_SUBMIT.setAttribute("id", id);
  }
 
 
}

// FUNCTION SEARCH TASKS
function searchFunction() {
  let valueSearchInput = document.getElementById("search").value;
  let tasks = getLocalStorage();
var filterTasks= tasks.filter(function (value) {
 return value.name.toUpperCase().includes(valueSearchInput.toUpperCase());

 
 })
 console.log(filterTasks);

    renderTask(filterTasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
}



// FUNCTION RESET
function resetForm() {
  ELEMENT_inputTask.value = "";
  ELEMENT_Select.value = "";
  ELEMENT_SUBMIT.innerText='Edit'
}


// DELETE TASKS

function deleteTask(id) {
  if (confirm("Are you sure want to delete")) {
    let tasks = getLocalStorage();
    tasks.splice(id, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask(getLocalStorage());
  }

 
  // FUNCTION RENDERTASK
}
function renderTask(tasks) {
  let content = "";

  tasks.forEach(function (task, index) {
    return (content += ` <tr>
        <td class="text-center">${index + 1}</td>
        <td>${task.name}</td>
        <td class="text-center">
        <span id="ele" class="label ${task.level}" >${task.level}</span>
        </td>
        <td>
            <button type="button" class="btn btn-warning" onclick="editTask(${index})">Edit</button>
            <button type="button" class="btn btn-danger" onclick="deleteTask(${index})">Delete</button>
        </td>
        </tr> `);
  });

  document.querySelector("#taskRow").innerHTML = content;
}

function getLocalStorage() {
  return localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks")): [];
}
