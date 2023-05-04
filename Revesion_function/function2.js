function sayhello (){
    console.log("Hello Vishal !");
    console.log("Hello Patel ji !");
}
 sayhello(); // calling the function

 function addTownum (num1, num2){
    return num1 + num2;
 }
  console.log(addTownum(23, 45));

  function registorUSer (user = "ayush"){
    if( user == undefined){
        return "Please the pass the user"
    }

      return user + ' is registerd at VV'
  }
  console.log(registorUSer("vishal"));

// Amazon Shoping cart

function cartBillTotal (...number){
    // take the varaibles 
    let total = 0;
    // loop all the values and keep adding into cart
    for (const num of number){
        total += num
    }
    // return total
    return total

}

// object 
const user = {
    id: "123",
    name :"vishal",
    email : "vishal@gmail.com"


}
function adduser (obj){
    console.log(`A user name ${obj.name} got a email ${obj.email}`);
}
// adduser(user);

                // Arrow Function 
const addTwoNumberv2 = (num1, num2) => {
    return num1, num2;
}



const addTwoNumberv3 = (num1, num2) => num1+ num2;
const addTwoNumberv4 = (num1, num2) => "5";
const addTwoNumberv5 = (num1, num2) => ({email : "vishal@gmail.com"})

function learning (){
    console.log(this)
}

const learningTwo = () =>{
    console.log(this);
}
learning();
learningTwo();

