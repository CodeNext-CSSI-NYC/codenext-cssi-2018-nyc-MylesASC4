//Myles Nutifafa
var user = require('readline-sync')
var rand = require('random-int')

console.log("WELCOME TO ROCK PAPER SCISSORS ")

const compNum = rand(2)
let compChoice = compNum
let Choice
debugger
switch(compChoice){
    
    case compNum == 0:
    Choice = "Rock"
    break
    
    case compNum == 1:
    Choice = "Paper"
    break
    
    case compNum == 2:
    Choice = "Scissors"
    break
}

let rps = user.question("Rock Paper or Scissors? ")

if(rps == Choice){
    console.log("The computer chose ",Choice,  " you chose", rps, "Its a tie")
}
else{
    // Paper v Rock
    if(Choice == "Paper" && rps == "Rock"){
        console.log("The computer chose ",Choice,  " you chose", rps, " you lose")
    }
    // Scissors V Rock
    else if(Choice == "Scissors" && rps == "Rock"){
        console.log("The computer chose ",Choice,  " you chose", rps, " you win")
    }

    // Paper V Scissors
    else if(Choice == "Paper" && rps == "Scissors"){
        console.log("The computer chose ",Choice,  " you chose", rps, " you win")
        }
    else{
        console.log("The computer chose ",Choice,  " you chose", rps, " you lose")
        }
    
}