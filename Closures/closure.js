let score  = 4;
function one (){
    let score = 0;
    console.log(score)
}
one()
console.log(score);

function outerfunc(){
    let outvar = "Ï am vishal verma";
    function innnerfunc(){
        let innervar = "I am level two ";
        console.log(outvar);
    }
    innnerfunc()
}

outerfunc()


