const handleToggleForm = (open = true) => {
    if(open) {
        ELEMENT_FORM_INPUT.removeAttribute('hidden')
        ELEMENT_FORM_BUTTON.style.backgroundColor = 'red'
        ELEMENT_FORM_BUTTON.innerHTML = 'CLOSE TASK'
    }else {
        ELEMENT_FORM_INPUT.setAttribute('hidden' , true)
        ELEMENT_FORM_BUTTON.style.backgroundColor = '#46b8da'
        ELEMENT_FORM_BUTTON.innerHTML = 'ADD TASK'
    }
}

function editTask(id){
   
    console.log(id);
    
   ShowData()
}

function deleteTask(id){
   
    console.log(id);
    
    ShowData()
}

function randomString(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;

}


// Show Data
const ShowData = () => {
   
    let xhtml = '';
    arrData.forEach((item , index) => {
        let id= item.id
        xhtml += ` <tr>
            <td class="text-center">${index + 1}</td>
            <td>${item.name}</td>
            <td class="text-center"><span class="label label-danger">High</span></td>
            <td>
                <button type="button" class="btn btn-warning" onclick="editTask('${id}')">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteTask('${id}')">Delete</button>
            </td>
        </tr>`
    })
    ELEMENT_CONTENT.innerHTML = xhtml
}


 


