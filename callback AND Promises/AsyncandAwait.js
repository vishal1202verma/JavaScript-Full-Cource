function createPromise (){
    return new Promise(function exec(resolve, reject) {
    //  your code goes here 
    setTimeout(function f()
    {
        console.log("timer done");
        resolve("done");
    }, 3000);
           
    });
}

// async function consume (){
//     return 10;
// }
// console.log(consume());

async function consume(){
    console.log("inside  funciton ");
    const response = await createPromise();
    const response1 = await createPromise();
    console.log("response is ", response);

}
console.log("start");
consume();

console.log("end");

