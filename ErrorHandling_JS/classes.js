class Product {

   
    constructor(n, p, r){
        console.log("calling the constructor");
        this.name = n;
        this.price = p;
        this.rating = r;

    }

    static custom (){
        console.log("calling a static method");
    }

    // begaviour ---> functions ---> member function 

    display(){
        console.log("this referce to", this)
        console.log("displaying the current product");
    }
     



}
const p= new Product("iphone", 85000, 5);//  new -> creatrs a empty plain object 

// in the above piece of code we calling a constructor method
console.log(p.name);
p.display();
Product.custom();
 



