   
//    Risky code 
   try{
    // block of code for testing
    
    let x =undefined;
    console.log(x[0]);
   }
   catch( err ){
    // block of code addressing errors
    console.log("error handling in catch");

   }
   finally{
    // code will excute after try and catch
    console.log(" code will excute after try and catch")
   }