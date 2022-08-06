// function check(a){
//     if(a%2===0){
//         console.log(a + " đây là số chẵn");
//     }
//    else if(typeof a==='string'){
//         console.log(a +"không phải là số")
//     }
//     else{
//         console.log(a, " không phải số chẵn");
//     }
// }
// check(3);

// function check(a){
//    a%2===0? console.log(a + ` đây là số chẵn`): typeof a==='string'?console.log(a + ` không phải là số`):console.log(a+ ' không phải số chẵn');
// }
// check(6);

var arr=9;
var b='xxx';
var c='\n'

for(var i=0; i<=9;i++){
   let str="";
   str=i+ b;
   for(var j=i+1; j<=arr;j++){
         str+= j+b;
    }
    str+= "</br>";
    document.write(str)
}
