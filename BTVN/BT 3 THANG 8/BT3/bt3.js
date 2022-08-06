var node = document.querySelector('.telecom')
var node2 = document.querySelector('.telecom2')
    const arr=[
        'Tiên học lễ hậu môn 1',
        'Tiên học lễ hậu môn 2',
        'Tiên học lễ hậu môn 3',
        'Tiên học lễ hậu môn 4',
      
    ]
    

   
setInterval(function(){
    return node2.innerHTML= arr[Math.floor(Math.random() * arr.length)];
},1000)



function sleep(ms){
    
  return new Promise(
    function(resolve){
      setInterval(function(){
        resolve(ms);
      },1000)
    }
    )
}

sleep(1000)
      .then(function(data){
       node.innerHTML=arr[0]
        return sleep(1000);
      })
      .then(function(data){
       node.innerHTML=arr[1]
        return sleep(1000);

      })
      .then(function(data){
        node.innerHTML=arr[2]

        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=arr[3]

        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=arr[0]

        return sleep(1000);

      })
      .then(function(data){
        node.innerHTML=arr[1]
        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=arr[2]
        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=arr[3]
        return sleep(1000);
      })
   
      .then(function(data){
        node.innerHTML=arr[0]
        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=arr[1]
        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=arr[2]
        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=arr[3]
        return sleep(1000);
      })
      .then(function(data){
        node.innerHTML=['Hết mất tiêu']
        
      })