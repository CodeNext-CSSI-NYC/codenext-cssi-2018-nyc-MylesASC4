// Myles Nutifafa
var input = require("readline-sync")

// let number = input.question("Give me a number: ")
// console.log("The square root of " + number + " is " + Math.sqrt(number))
// let name = input.question("Whats your name? ")
// console.log("You name " + name + " has " + name.length + " letters")
// let word = input.question("Gimmie a word ")
// console.log(" The word " + word + " starts with the letter " + word.charAt(0) )
let num1 = parseInt(input.question(" Gimmie two numbers "))
let num2 = parseInt( input.question(""))
function avg(num1,num2){
    return (num1 + num2)/2;
}
console.log("The average of "+ num1 +" and "+ num2+ " is " + avg(num1,num2) )
// Remember that you can comment parts of your code in and out!
// Try this as you move from question to question below.

// 1. Ask the user to enter a number, and print out "The square root of ___ is ___ ", but with the blanks filled in correctly. (Not sure how to get the square root of a number in JavaScript? Google it!)

// 2. Ask the user to enter their name, and print out "Your name has ___ letters", but with the blank filled in. Not sure how to get the number of letters in a string in JavaScript? Google it!

// 3. Ask the user to enter any word, and print out "The word ____ starts with the letter ___", but with the blanks filled in. Not sure how to get the first letter of a string in JavaScript? ...

// 4. Ask the user to enter two numbers, and print out "The average of ___ and ___ is ____", but with the blanks filled in.