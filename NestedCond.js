//Myles Nutifafa 
var user = require("readline-sync")
// 1. Ask the user to type in fruit or veggie.
// If they say fruit, ask them to choose a or b.
// If they say a, print out apple. If they say b, print out banana.
// If they said veggie at the beginning, ask them to choose m or p.
// If they say m, print out mushroom. If they say p, print out pepper.
var food = user.question("Type in fruit or veggie (literally): ")
if(food == "fruit"){
    var chose = user.question("A or B?: ")
    if(chose == "A"){
        console.log("You got an Apple ;)")
    }
    else{
        console.log(' THIS ISH IS BANANAS! B A N A N A S!! ')
    }
    
}
else{
    var chose = user.question("M or P?: ")
    if(chose == "P"){
        console.log("You got a Pepper, spicy ;P ")
    }
    else{
        console.log(" Mushrooms, you must be a Fun-gi")
    }
}

// 2. Ask the user to choose square or rectangle.
// Also ask them to choose area or perimeter.
// Tell them the formula depending on what they chose.
// For example, if they said square and perimeter, you could print: 4 * s
var shape = user.question("Chose: Square or Rectangle ")

if( shape == "Square"){
    var aB = user.question("Chose: Area or Perimeter ")
    if ( aP = "Area"){
        console.log("The formula for Area is: S*S")

    }
    else{
        console.log("The Formula for Perimeter is: 4*S ")
    }
    
}
else{
    var aB = user.question("Chose: Area or Perimeter ")
    if ( aP = "Area"){
        console.log("The formula for Area is: L*W ")

    }
    else{
        console.log("The Formula for Perimeter is: 2L + 2W ")
    }
}
// BONUS CHALLENGE
// 3. Pretend you are running a fast food shop.
// Start out with the line let totalCost = 0;
// Ask the user if they want a value meal, or if they will order individual items.
// If they want a value meal, ask if they want the burger ($7) or the chicken ($6).
// Add the amount to totalCost, then tell them how much they owe.
// If they want individual items, ask them (one item at a time)
//     if they want burger ($4), fries ($2), drink ($1), dessert ($2).
// Each time they say yes, add the right amount to the totalCost.
// At the end, tell them how much they owe.