function showTask(){
    formAddTask.classList.toggle('open')
    
}  
function addBackColor(){

    ELEMENT_btnAddTask.classList.toggle('add-color')


}

ELEMENT_btnAddTask.addEventListener('click',showTask,addBackColor)
ELEMENT_btnAddTask.addEventListener('click',addBackColor)