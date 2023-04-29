
let myHeros = ["Thor", "SpiderMan"]
let dcHeros  = ["batsman", "flash", "superman"]

let herpower  ={
    Thor:  "hammmer",
    spiderMan: "sling",

    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spiderMan}`);
    }


}
Object.prototype.vishal = function(){
    console.log("vishal is present in all objects");

}
console.log(myHeros.vishal());

Arrray.prototype.heyVishal = function(){
    console.log("vishal say hi");
}
console.log(herpower.heyVishal());

// inherentence 

const user = {
    name: "Top name",
    email: "Top@gmail.com"
}

const Teacher  ={
    makeVedios : true

}

const TeachingSupport=  {
    isAvailable : false
}

const TAAssistant = {
    makeAssignment: " JS Assignment",
    fulltime: true,
    __proto__:TeachingSupport
}
// Teacher.__proto__ = user

Object.setPrototypeOf(TeachingSupport, Teacher)
console.log(TAAssistant.isAvailable);

String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`)

}

"vishal.   ".truelength()
"ayush.   ".truelength()


"vishal.   ".truelength()
console.log();


