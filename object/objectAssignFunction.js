//object.assign  just copy only the object's value not its reference's value,
let user={
    name:"priya",
    age:40,
}
let anotherUser=Object.assign({},user);//cloning {k:v} from user to anotheruser,
console.log(anotherUser);
console.log(anotherUser.name);


let addweight={
   weight:50,
}
Object.assign(user,addweight);
console.log(user);

//nested object
let admin = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  console.log( admin.sizes.height );