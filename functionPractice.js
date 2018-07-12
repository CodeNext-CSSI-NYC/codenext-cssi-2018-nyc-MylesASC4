//Myles Nutifafa
 // MAKE SURE YOU CHOOSE GOOD, RELEVANT NAMES FOR YOUR FUNCTIONS AND PARAMETERS

// 1a. Write (declare) a function that prints out "meow"
function catNoise(){
    console.log("Meow")
}
// 1b. Call it three times in a row. Run your code to make sure it works.
// catNoise()
// catNoise()
// catNoise()
// 2a. Write (declare) a function that takes one parameter and prints out the square of that number
let user = require("readline-sync")
// function squareIt(){
//     let num = user.question("Give me a number: ")
//     console.log(num**2)
// }
// squareIt()

// 2b. Call it three times with three different parameters. Run your code to make sure it works.
// function square(value){
// console.log(value**2)

// }
// square(9)
// square(3)
// square(12)


// 3a. Write (declare) a function that takes two parameters and prints out
// "_____ is greater than ____" with the blanks filled in correctly with the two inputs.
// let num1 = parseInt(user.question("Give me a number: "))
// let num2 = parseInt(user.question("Give me another number: "))

// function great(val1, val2){
//     if(num1 > num2){
//         console.log( num1, " > ", num2 )
//     }
//     else{
//         console.log( num1, " < ", num2 )
        
//     }
// }

// great()


// 3b. Call it three times with three different parameters
// Make sure to try cases where the first one is bigger, the second one is bigger, and when they are equal.
// Run your code to make sure it works.
//    function great(val1, val2){
//         if(val1 > val2){
//                 console.log( val1, " > ", val2 )
//                 }

//         else if(val1 == val2){
//             console.log( val1, " = ", val2 )

//         }
//         else{
//             console.log( val1, " < ", val2 )
                    
//                 }
//             }

// great(3,5)
// great(101,99)
// great(45, 45)

// 4a. Write (declare) a function that takes one parameter called name and
// returns (not prints out, just returns) the string "Hello ____", with the name in the blank.
// function supDude(names){
//     if(names){
//         return "Hello " + names
//     }
//     else{
//         let name = user.question("Whats your name?: ")
//         return "Hello " + name
//     }
// }

// // 4b. Call the function and store the result in a variable. Then, print out that variable.
// // Repeat this three times with different names.

// let Kevin = supDude("Kevin")

// console.log(Kevin)

// userName = supDude()
// console.log(userName)

debugger
// 5a. Write (declare) a function that takes two parameters and
// returns (not prints out, just returns) the average of the parameters.
let number = 2;
let number2 = 4;
function average(number, number2){
    return (number + number2)/2
}
// 5b. Call the function and store the result in a variable. Then, print out that variable
// in a sentence like "The average is _____".
// Repeat this three times with different numbers. What happens if you pass in
// something that isn't a number, like true or "apple"?
function printAvg(){
    let number = parseInt(user.question(" Gimmie two numbers "))
    let number2 = parseInt( user.question(""))
    let avg = average(number,number2);
    console.log(" The average of ", number, " and ", number2, " is ", avg)
}
 printAvg()