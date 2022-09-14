const Api="https://apiforlearning.zendvn.com/api/get-gold"

fetch(Api)
  .then(function (response) {
    return  response.json()})
  .then(function(posts){
    var temp=""
    posts.forEach((itemData) => {
        temp+= `<tr>
            <td>${itemData.type}</td>
            <td>${itemData.buy}</td>
            <td>${itemData.sell}</td>
            </tr>`    
    });
    document.getElementById('data').innerHTML = temp;
})


// Cách 2 dùng async và await 
// async makes a function return a Promise
// await makes a function wait for a Promise

// async function showData () {
//     try {
//         let res = await fetch(url);
//         let data =  await res.json()
//     } catch (error) {
//         console.log(error);
//     }
// }

