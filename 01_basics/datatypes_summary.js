// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


// const bigNumber = 34567847093842847587n

//Refernce (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "bhavika",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world");   
}

console.log(typeof null);



//******************************************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "bhavikashindedotcom"

let anothername = myYoutubename
anothername = "coffeewithcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

// userTwo.email = "bhavika@google.com"

// console.log(userOne.email);
// console.log(userTwo.email);
