let user={
    name:"Zain",
    surname:"Imam",
    age:30
}
console.log(user);
console.log(user.name);//fetch value of key
user.age=31;//change value to exiting value
console.log(user["age"]);//another way of fetch value of key.
user.profession="actor";//add new {k:v} to object,
user.color="white";
console.log(user);
delete user.color;//delete a {k:v} from object,
console.log(user);
console.log("name" in user);//to check a key is exist in object and the "key" should be "quoated"
let key="age";//store "key" in a seperate variable named "key"
console.log(key in user);

