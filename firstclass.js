const powerTwo = (n)=>{
    return n**2;
}

function powerCube(powerTwo, n){
    return  powerTwo (n)*n
}

console.log(powerCube(powerTwo , 3));

    // another function 

    function sayHello(){
        return ()=>{
            console.log("Hello Vishal");
        }
    }
    let guessvalue = sayHello(); 
    console.log(guessvalue);

    guessvalue();


    // higherorder function 

    const higherorder = n=>{
        const oneFun = m=>{
            const twoFun = p =>{
                return n+m+p;
            }
            return twoFun;
        }
        return oneFun;
    }
  
    console.log(higherorder(2)(3)(4));

    const myNums = [2, 3, 4, 5]

    const sumArray = arr=>{
        let total = 0
        arr.forEach(element =>{

        });
        return total 
    }

    console.log(sumArray(myNums));

    function onoMorehello(){
        console.log("Hello hitesh!");

    }

    setInterval(oneMorehello, 1000);

    setTimeout(oneMorehello, 2000);
    










