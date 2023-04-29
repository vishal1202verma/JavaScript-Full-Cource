const oneArray = [1, 2, 3, 4]
const TwoArray = [5, 6, 7, 8]

// const ThreeArray =oneArray.concat(TwoArray)
const ThreeArray =[...oneArray, ...TwoArray]
console.log(ThreeArray);

function manyArguments (){
     let args = Array.from(arguments)
     let finalArr = args.map(e => e)
     console.log(finalArr) 

}

manyArguments(1, 2., 3, 4, );
manyArguments(5, 6, 7, 8, );

// ++++++++++++++++++++++++++++++++++++++

// Rest Operator
function manyArgumentsv2 (...args){
    let finalArr =args.map(e => e)
    console.log(finalArr)
}

manyArguments(1, 2., 3, 4, );
manyArgumentsv2(5, 6, 7, 8, );


 