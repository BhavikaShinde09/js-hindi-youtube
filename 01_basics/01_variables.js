const accountId = 1234
let accountEmail = "hrllo@google.com"
var accountPassword = "12345"
accountCity = "Mumbai"
let accountState;

// accountId = 2 // not allowed

accountEmail = "bh@js.com"
accountPassword = "647379"
accountCity = "Bangaluru"

console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])