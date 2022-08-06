var node= document.querySelector('.telecom');

var textArea='Lập trình Frontend tại ZendVN hướng dẫn Frontend từ a đến z. Frontend không khó để học!'
var result=textArea.replace(/Frontend/g,`<span class="text">Frontend</span>`)   
node.innerHTML=result




