//Myles Nutifafa 
var rand = require("random-int")
var user = require("readline-sync")

let guess = user.question("Guess heads or tails: ")
let hT = rand(1)

if(hT  > .5){
    hT = "tails"
}
else{
    hT = "heads"
}

if(guess == hT){
    console.log("YOU WON")

}
else{
    console.log("You lost, sorry :/ ")
}