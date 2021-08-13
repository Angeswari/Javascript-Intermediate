//function with Arguments and return
function sayHello(name,message){
      return name+" "+message;
}
var result=sayHello("Ammu","Hello!");
console.log(result);
console.log(sayHello("priya","Hi!"));


//function with Argument and no return
function addNumbers(a,b){
      console.log(a+b);
}
addNumbers(5,10);


//pass variable as parameter to the function 
let myName="ammu";
function sayName(myName,message){
     console.log(myName+" "+message);
}
sayName(myName,"hello!");


//default value to parameter.In order to avoid undefined.
function greeting(myname,msg="hi"){
    console.log(myname+" "+msg);
}
greeting("ammu");

