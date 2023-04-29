function h(x, fn){
    // h  --> higher order function 
    // fn --> callback function 
    console.log(x*x);
    fn(x*x)
}

h(10, exe)
     

function exe(n){
    console.log("Square value is -" ,n)
}

