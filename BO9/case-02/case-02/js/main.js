const ELEMENT_BOX= document.getElementsByClassName('box')

var maxHeight= 0;
for(var i=0; i< ELEMENT_BOX.length; i++){

    if (maxHeight < ELEMENT_BOX[i].offsetHeight){
        maxHeight =ELEMENT_BOX[i].offsetHeight;
    }
    else{
        maxHeight=maxHeight;
    }
  
}
for(var j=0; j< ELEMENT_BOX.length; j++){
    ELEMENT_BOX[j].style.height=maxHeight+'px';
    ELEMENT_BOX[j].style.height=maxHeight+'px';
    if(j%2===0){
        ELEMENT_BOX[j].style.background='red';
        }
        else{
        ELEMENT_BOX[j].style.background='brown';

        }

}



    
        




