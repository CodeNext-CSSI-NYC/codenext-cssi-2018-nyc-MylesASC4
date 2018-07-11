var input = require("readline-sync")

// var city = input.question("Do you live in New York? : ")
// var age = parseFloat(input.question("How old are you?: "))
// var citizen = input.question("Have you been a citizen for at least 9 years?: ")
var day = parseInt(input.question("Enter a number 1 - 7 : "))

//  let vowels = ["a", "e", "i", "o", "u"]
// Complete these one at a time. Test each one several times to make sure it works.
// When you are done with each one, comment it out when you move to the next one, so it doesn't keep showing up.


// // 1. Ask the user for a number and print whether it is positive or negative or zero.
// if( Math.sign(num) == -1){
//     console.log( num , " Is negative")
// }
//     else if( Math.sign(num) == 1){
//     console.log(num, " is positive")
// }
//     else{
//     console.log(num, " is 0")
// }

// 2. Ask the user to enter three numbers, and then print out the biggest number they entered.
// if((num)){
//     if(num > num2){
//         console.log(num)
//     }
//     else if(num < num2){
//         console.log(num2)
        
//     }
//     else if(num2 > num3){
//         console.log(num2)
//     }
//     else if(num < num3){

//         console.log(num3)
//     }
//     else{
//         console.log(num)
//     }
// // }
// // 3. Ask the user for a number and print whether it is odd or even
// if (num %2 == 0){
//     console.log(num, " is even")
// }
// else{
//     console.log(num, " is odd")
// }
// 4. Ask the user to enter a letter and tell them if it is a vowel or consonant
    // if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
    //     console.log(letter, " is a vowel")
    // }
    // else{
    //     console.log(letter, "is a consonant")
    // }

// 5. Ask the user to enter a year, and tell them if it was a leap year.
// (You can use Google if you're not sure when leap years happen.)
// if( year %4 == 0){
//     console.log( year, ' is a leap year')
// }
// else{
//     console.log(year, " is not a leap year")
// }


// 6. Ask the user if they have been a citizen for at least 9 years (yes or no), ask them their age, and ask if they live in New York state.
// // If they answer yes, their age is above 30, and yes, then tell them they can run for senate in NY. Otherwise, say that they cannot.
// if( age >= 30 && city == "yes" && citizen == "yes"){
// console.log(" Congrats, you're eligible to run for Senate in New York")
// }
// else{
//     console.log("Unfortunately you cannot run for Senate, sorry")
// }

// 7. Write a program that asks the user to enter a whole number 1-7 and prints out the corresponding day of the week.
// If you want another challenge, look up how to use switch statements and use a switch instead of if-else for this.
// Note that we usually don't bother with switch statements unless there are more than a few elses.
switch(day){
    case 1:
    console.log("Monday")
    break
    case 2:
    console.log("Tuesday")
    break
    case 3:
    console.log("Wednesday")
    break
    case 4:
    console.log("Thursday")
    case 5:
    console.log("Friday")
    break
    case 6:
    console.log("Saturday")
    break
    case 7:
    console.log("Sunday")
    break
   
}