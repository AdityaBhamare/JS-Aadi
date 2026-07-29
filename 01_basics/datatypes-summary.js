// *Primitive datatype:- 
// 7 types :- String, Number, Boolean, Null, Undefined, Symbol, 
// Bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//const bigNumber = 345678893345675n 

// *Reference type(Non primitive):-
// types:- array, objects, functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "aditya",
    age: 20,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);

// ***********************************
// Stack Memeory(Primitive), Heap(Non-Primitive)

let myYoutubename = "adityabhamare"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "aadityamanohar"

console.log(userOne.email);
console.log(userTwo.email);