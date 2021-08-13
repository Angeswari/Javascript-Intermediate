var testArray=[1,2,3,4,5,6,7,8,9];
console.log(testArray.fill("$",2,7));// 2-->(INC)start value,7-->(EXC)end value

var myNumber=[12,45,55,89,87,95,99,23,120,100];
console.log(myNumber.filter((num) => (num>55)));//filter uses arrow function
console.log(myNumber.filter((num) => (num>=100)));//return desired output.