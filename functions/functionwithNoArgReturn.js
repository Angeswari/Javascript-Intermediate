//No Arguments && No Return
function sayHi(){
    console.log("Hi!");
}
sayHi();

// Assign local variable inside function.
function sayName(){
    let myName="Angeshwari"; //it access only inside the function
    console.log(myName);
}
sayName();
//console.log(myName); //reference error 

//Assign global variable 
//A function can access an outer variable as well,
let firstName="Angeshwari";
function myname(){
    let lastName="G";
    console.log(` the firstname is ${firstName} and the lastname is ${lastName}`)
}
myname();

