//Function Declaration,
function isEven(element){
if(element%2 === 0){
   return true;
  }
    return false;
}
console.log(isEven(1));

//Function Expression
var isEven=function(element){
return element%2 === 0;
}
console.log(isEven(1));

//--->Arrow Function:)
var isOdd=(element)=>{
return element%2!=0;
}
console.log(isOdd(3));


// var isEven=function(element){
//     return element%2 === 0;
// }
// var num=[2,4,42,8].every(isEven);
// console.log(num);

//---> In Es6 CallBack Function:) also known as Arrow Function
var num=[2,3,6,8].every((e)=>{
    return e%2 === 0;// when "{}" use "return" must be used.
})
console.log(num);
         
                //   or

var num=[2,4,6,14].every((e)=>(e%2 === 0)) //while using this "()" , "return" not to be used.
 console.log(num);