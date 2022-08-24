// Xử lý render số ra màn hình
var arr=[]
for (var i=1; i<=25; i++){
  arr.push(i)
}
function render(array) {
  let content=""
  array.forEach(function(task,index) {
    return content+=`<div class="box" id=><p class="box__text" 
    onclick="showNumber('${index+1}')">${index+1}</p></div> `;
});
  numberNode.innerHTML=content
}
render(arr)
// random số
function random(){
  let secretNumber
  return secretNumber=Math.floor(Math.random()*25 +1)
}
random()
const numberSecret=random()
console.log(numberSecret);
  var one = 0;
function showNumber(index){
  console.log(index);
boxNode.style.backgroundColor ="#ffcd44";
  one = one + 1;
  if (one == 1){
    if(index>numberSecret){
      ELEMENT_NUMBER_TURN.innerHTML=(`Lần 1: Số ${index} lớn hơn số bí mật`);
      ELEMENT_WRONG_ANSWER.innerHTML="Sai rồi"
      BOX_INCORRECT.classList.remove('hidden')
      boxNode.style.backgroundColor="red"
      ELEMENT_HEALTH_ICON.classList.remove('active--1')
    }
    else if(index < numberSecret){
       ELEMENT_NUMBER_TURN.innerHTML=(`Lần 1: Số ${index} nhỏ hơn số bí mật`);
      ELEMENT_WRONG_ANSWER.innerHTML="Sai rồi"
      BOX_INCORRECT.classList.remove('hidden')
      ELEMENT_HEALTH_ICON.classList.remove('active--1')
      BOX_INCORRECT.classList.remove('hidden')
    }
    else {
      ELEMENT_NUMBER_TURN.innerHTML=(`Lần 1: Số ${index} Chính là số bí mật`);
      ELEMENT_SHOW_SECRET_NUMBER.style.display="block";
      ELEMENT_SECRET_NUMBER.innerHTML=numberSecret
      ELEMENT_WRONG_ANSWER.innerHTML="Chính xác"
      BOX_INCORRECT.classList.remove('hidden')
      BOX_INCORRECT.classList.add('active')
      showNumber="";
    }
  }
  if (one ==2){
      if(index>numberSecret){
        ELEMENT_HEALTH_ICON_2.classList.remove('active--2')
         ELEMENT_NUMBER_TURN_2.innerHTML=(`Lần 2: Số ${index} lớn hơn số bí mật`);
        BOX_INCORRECT_2.classList.remove('hidden')
         ELEMENT_WRONG_ANSWER_2.innerHTML="Sai rồi"
          
      }
      else if(index < numberSecret){
        ELEMENT_HEALTH_ICON_2.classList.remove('active--2')
         ELEMENT_NUMBER_TURN_2.innerHTML=(`Lần 2: Số ${index} nhỏ hơn số bí mật`);
        BOX_INCORRECT_2.classList.remove('hidden')
         ELEMENT_WRONG_ANSWER_2.innerHTML="Sai rồi"
     
      }
      else{
        ELEMENT_NUMBER_TURN_2.innerHTML=(`Lần 2: Số ${index} Chính là số bí mật`);
       ELEMENT_SHOW_SECRET_NUMBER.style.display="block";
        ELEMENT_SECRET_NUMBER.innerHTML=numberSecret
        ELEMENT_WRONG_ANSWER_2.innerHTML="Chính xác"
        ELEMENT_WRONG_ANSWER_2.classList.add('active')
        BOX_INCORRECT_2.classList.remove('hidden')
        BOX_INCORRECT_2.classList.add('active')
      showNumber="";
      }
      return;
      }
    if (one == 3){
      if(index>numberSecret){
         ELEMENT_NUMBER_TURN_3.innerHTML=(`Lần 3: Số ${index} lớn hơn số bí mật`);
          BOX_INCORRECT_3.classList.remove('hidden')
      ELEMENT_HEALTH_ICON_3.classList.remove('active--3')
         ELEMENT_WRONG_ANSWER_3.innerHTML="Sai rồi"
      }
      else if(index < numberSecret){
         ELEMENT_NUMBER_TURN_3.innerHTML=(`Lần 3: Số ${index} nhỏ hơn số bí mật`);
        BOX_INCORRECT_3.classList.remove('hidden')
       ELEMENT_HEALTH_ICON_3.classList.remove('active--3')
         ELEMENT_WRONG_ANSWER_3.innerHTML="Sai rồi"

      }
      else{
         ELEMENT_NUMBER_TURN_3.innerHTML=(`Lần 3: Số ${index} Chính là số bí mật`);
         ELEMENT_SHOW_SECRET_NUMBER.style.display="block";
         ELEMENT_SECRET_NUMBER.innerHTML=numberSecret
         ELEMENT_WRONG_ANSWER_3.innerHTML="Chính xác"
         BOX_INCORRECT_3.classList.remove('hidden')
         BOX_INCORRECT_3.classList.add('active')
      }
      ELEMENT_SECRET_NUMBER.innerHTML=numberSecret
      BOX_INCORRECT_3.classList.remove('hidden')
      ELEMENT_SHOW_SECRET_NUMBER.style.display="block";
      showNumber=""
      }
    }
