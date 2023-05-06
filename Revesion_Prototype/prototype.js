
const Name = {
    username: "vishal",
    Age: "20",
    email:"vishal1202@gmail.com",

}

// destructuring of Object

const {username , Age , email} = Name;

const Array = [
{
    username: "ayush",
    email:"ayush1046@gmail.com"
},

{
    username: "aryan",
    email:"aryan1046@gmail.com"
},

{
    username: "arpit",
    email:"arpit1046@gmail.com"
}


]
Array.map((ele) =>{
    // console.log(ele.username);
})

// object declarartion 
const pwcourse = {
    coursename: "Pw1",
    price:1299,
    
    getcoursedeatilas: function(){
        console.log(`course name is ${this.coursename} and course price is ${this.price}` )
    }

}

Object.prototype.vishal  =function(){
    console.log("vishal is here ")
}
Array.prototype.heyvishal  = function(){
    console.log("object revesion class")
}
pwcourse.getcoursedeatilas();
pwcourse.vishal();
Array.vishal()

const newstring = "ayush"
newstring.vishal();

pwcourse.heyvishal(); // no
Array.heyvishal(); // Yes

