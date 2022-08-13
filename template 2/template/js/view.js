ELEMENT_FORM_BUTTON.addEventListener('click', function () {
    handleToggleForm(toggleFrom)
    toggleFrom = !toggleFrom
})

ELEMENT_FORM_SUBMIT_BUTTON.addEventListener('click' , function () {
    let id=randomString(20)
    let name = ELEMENT_FORM_INPUT_NAME.value
    let level = ELEMENT_FORM_INPUT_LEVEL.value
    
    arrData.push({id,name,level})
    ShowData();
})


ShowData()