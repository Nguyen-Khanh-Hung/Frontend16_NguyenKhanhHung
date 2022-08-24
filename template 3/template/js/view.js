ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {
    let id      = ELEMENT_INPUT_HIDDEN.value ? ELEMENT_INPUT_HIDDEN.value : makeid(20)
    let name    = ELEMENT_FORM_INPUT_NAME.value
    let level   = ELEMENT_FORM_INPUT_LEVEL.value
    let item    = {id , name , level}

    if(!name.trim()) {
        alert('Vui long nhap thong tin')
        return
    }
    
    !ELEMENT_INPUT_HIDDEN.value ? addItem(item) : editItem(item)
    showData()
    handleToggleForm(false)
})

arrData = getItemLocal()
showData()