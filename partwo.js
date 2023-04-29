let arr = [2, 3, 4];

arr.forEach(function(element, index, arr){
    console.log(index, element, arr);
})

arr.forEach((element, index, arr) =>{
    console.log("arrow", index, element, arr)
});

const heros =["nagaraj", "doga", "dhruva", "maniraj"];

heros.forEach((el)=> {console.log(el.toUpperCase())});

//Map start 

arr.map(function(element, index, arr){
    console.log(element, index, arr)
});

heros.map((h)=> console.log(h.toUpperCase()));

//filters

console.log(heros);
const herosWithvishal = heros.filter((h)=>{
   return h.endsWith('vishal')
});

console.log(herosWithvishal);

// shoping cart

const cartBill = [240, 340, 440];
const sumOfCartBill = cartBill.reduce((prev , curr) => prev+curr , 0 );
console.log(sumOfCartBill);

// Gaming Scrore 

const gameScore = [200, 300, 500, 345, 130]
console.log(typeof gameScore[1])
//check if all values are numbers


const gamesScroeCheck = gameScore.every((v)=> typeof v === 'number')
console.log("check", gamesScroeCheck);

//find score above  200

const above200 = gameScore.find((score)=> score >200)
console.log(above200);








