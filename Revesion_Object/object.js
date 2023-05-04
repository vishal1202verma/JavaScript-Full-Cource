console.log("object");

let obj1 = {
    name:"vishal",
    id: "1202",
    email:"vishal121@gmail.com",
    islogged: true,
    registerUser : function (){
        console.log(`${this.name } is a registered user !`);
    }
}

console.log(obj1.name)
console.log(obj1.id)

let obj2 = {
    10: "num10",
    20: "num20"
}

const key1 = Symbol("key1")
const key2 = Symbol("key2")

const obj3 = {
    [key1]:"vishal",
    [key2]:"Patel",

}

console.log(obj3[key2])

const obj4 = new Object()
obj4.email = "121vishal@gmail.com";

const obj5 = {
    name: "ayush",
    email: "ayush1046@gmail.com",

}
obj5.email = "1046ayush@fgmail.com";
obj5["isloogedIn"] = false

console.log(obj5)
console.log(Object.keys(obj5));

