const accountId = 123456 //const is used to asign value parmenantly it cant be changed.
let accountName = "Imaad" //let is used to declare a variable whose value can be changed later.
var accountPswd = "1234"
accountState = "Jammu and Kashmir"
let accountDistrict;

/*
Prefer not to use the var because of issue in block scope and functional scope
*/


// console.log(accountId,accountName,accountPswd,accountState);
// console.table([accountId,accountName,accountPswd,accountState,accountDistrict])

let name = "Imaad"
console.log(`Hello ${name} Welcome back`);
let myDate = new Date()
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());


