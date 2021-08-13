//similar to object but not same
//Map allows key of any type.
var myMap= new Map();//create map
myMap.set(1,"One");// stores the value by the "keys & values".
myMap.set(2,"Two");
myMap.set(3,"Three");
myMap.set(4,"Four");

console.log(myMap);
console.log(myMap.get(1));//returns the value by the key, undefined if key doesn’t exist in map
console.log(myMap.size);//return size of myMap,

for(let key of myMap.keys()){
    console.log(`key is ${key}`);
}

for(let value of myMap.values()){
    console.log(`value is ${value}`);
}

for(let [key,value] of myMap){
    console.log(` key is:${key} and value is:${value}`);
}

//forEach gives the value first,
myMap.forEach((value)=>console.log(value));

myMap.forEach((v,k)=>console.log(` ${v} and ${k}`));

myMap.delete(3);
console.log(myMap);


// creates a new array with the results of calling a function for every array element.
let circles=[10,20,30];

function circleArea(radius) {
    return Math.floor(Math.PI * radius * radius);
}
let areas = circles.map(circleArea);
console.log(areas);

         //another way using Arrow function,

let c=[10,20,30];
let a=c.map((i)=>{
    return Math.floor(Math.PI*i*i);
});
console.log(a);
