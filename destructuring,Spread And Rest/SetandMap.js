let emptySet = new Set()

console.log(emptySet.size)

let myArray = [1, 2, 3 ,4 ,5 ]
let newSet = new Set([...myArray]);
console.log(newSet);


newSet.add(10)
console.log(newSet);
console.log(newSet.has(10));

// Set difference 

function setDifference(setA, setB){
  return new Set ( [...setA].filter( el => !setB.has(el)))
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Mp 
let map = new Map()

console.log(map.size);

let arr = [
[1, "Vishal"]
[2, "ayush"]
[3, "Saumya"]
[4, "gungun"]
[5, "Nandini"]
];

arr.map((arrayItem) => map.set(arrayItem[0], arrayItem[1]) )









