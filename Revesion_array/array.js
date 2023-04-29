let arrOne = [1, 2 ,3, 4, 5, "vishal", true];
console.log(arrOne.length);
console.log(arrOne[arrOne.length-2]);
// console.log(arrOne)
arrOne[5] = "Vishal Verma";

for (let i=0; i<arrOne.length; i++){
    if(arrOne[i] == "Vishal Verma"){
        arrOne[i] = "Vishal Patel";
        
    }
}
// inserting an element inside the array by push method 
arrOne.push("Ayush Patel");
console.log(arrOne);


var a= 10; 
var b= 20; 
function sum (){
    var c = a+b;
    return c;
}
var c = sum ();
console.log(c);
prompt("enter your name :");
alert("Nice Name");
