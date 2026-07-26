const accountId = 144553
let accountEmail = "aditya@123.com"
var accountPassword = "12345"
accountCity = "Pune"
let accountState;

// accountId = 2 
// const once declared cannot be changed.

accountEmail = "ad@ad.com"
accountPassword = "212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var because of issue
in the block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])