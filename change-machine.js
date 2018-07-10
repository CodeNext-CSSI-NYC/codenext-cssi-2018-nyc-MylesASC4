// Author: Myles Nutifafa
var input = require("readline-sync")
let coins = parseInt(input.question(" HELLO I AM CHANge MACHINE: INPUT CHANGE VALUE: "))

const Nickel = 5
const Quarter = 25
const Penny = 1
const Dime = 10

const qNum = coins/Quarter
const dNum = (coins%Quarter)/Dime
const nNum = (coins%Dime)/Nickel
const pNum = (coins%Dime)/Penny

const qVal = Quarter*qNum
const nVal = Nickel*nNum
const pVal = Penny*pNum
const dVal = Dime*dNum

coins = coins - qVal - dVal - pVal - nVal   
console.log( "Quarters: " + Math.floor( qNum));
console.log( "Dimes: " + Math.floor(dNum))
console.log( "Nickels: " + Math.floor(nNum))
console.log( "Pennies: " + Math.floor(pNum))

