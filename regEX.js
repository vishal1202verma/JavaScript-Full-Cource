// basic of regEX (regular Expression)

let pattern = 'vishal'

let regEX1 = new RegExp(pattern)

let flag = 'gi'

let regEx2 = new RegExp(pattern , flag)

let regEx3 = new RegExp(vishal, gi)

const strToCheck = "vishal verma is a intelegent and har working man and now he is learning the programming soon he will be the pro Programmer and developer";

const result = regEX3.test(strToCheck)
console.log(result);

const anotherResult = strToCheck.match(regEx3)
console.log(anotherResult);

const oneMoreResult = strToCheck.replace(regEx3, 'v-l')
console.log(oneMoreResult);








 