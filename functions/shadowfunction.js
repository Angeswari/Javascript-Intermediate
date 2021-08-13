//the  global value was modified by the function

/*
let firstName="Angeshwari";
function myname(){
    firstName="Hari"
    let lastName="G";
    console.log(` the firstname is ${firstName} and the lastname is ${lastName}`)
}
console.log(firstName);//before call it has unchanged value
myname();
console.log(firstName);// after call it has changed value.
*/



//The outer variable is only used if there’s no local one.
//If a same-named variable is declared inside the function then it shadows the outer one.

let firstName="Angeshwari";//global variable
function myname(){
    let firstName="Hari";//local variable
    let lastName="G";
    console.log(` the firstname is ${firstName} and the lastname is ${lastName}`)
}
console.log(firstName);//before call it hasn't changed value
myname();//function uses the local variable
console.log(firstName);// after call it hasn't changed value.
//the function did not access the outer variable.



