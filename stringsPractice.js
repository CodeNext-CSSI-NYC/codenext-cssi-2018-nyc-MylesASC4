//Myles Nutifafa
let user = require("readline-sync")

function AbBa(x , y){
   if(x,y){
       console.log(x,y,y,x)
   }
   else{

       let a = user.question("Give me a word: ")
       let b = user.question("Give me another word: ")
       console.log( a,b,b,a)
    } 
}

// AbBa("Hey","There")

function shortLong(j,k){
    if(j,k){
        if(j.length > k.length){
            console.log( k+j+k)
        }
        else{
            console.log( j+k+j)

        }
    }
    else{
        
        let q = user.question("Give me a word: ")
        let w = user.question("Give me another word: ")
        
        if(w.length > q.length){
            console.log( q+w+q)
        }
        else{
            console.log( w+q+w)

        }
    }

}

// shortLong()
function lastTwo(word){
let last2 = word.substr(word.length -2, 2)
let secTo = last2.charAt(0)
let last = last2.charAt(1)

console.log(word,secTo,last)
return 
}
function typo(word){
    lastTwo(word)
    if(word){
        lastTwo(word)
        console.log(word.substring(0, word.length -2) + secTo + last)
}
}


typo("Heyo")