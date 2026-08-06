// singleton
// Object.create


// object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "aditya",
    "full name": "Aditya Bhamare",
    [mySym]: "myKey1",
    age: 20,
    location: "Pune",
    email: "bhamareaditya@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "bhamareaditya2006@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "bhamareaditya@gmail.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Js User")
}
JsUser.greetingsTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());