
// GETTERS AND SETTERS (ES5 Function Based)
// Before ES6 classes existed, we used constructor functions and
// Object.defineProperty() to create getters and setters.

// As we know in early times classes were not existing
function User(email, password){
    // We still use the underscore convention for private backing variables
    this._email = email;
    this._password = password


    // how were getter and setter used when there were no classes

    // Defining the 'email' property with getter and setter
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this.email = value
        }
    })

    // Defining the 'password' property with getter and setter
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai","chai")

console.log(chai.email);

// there is also one more syntax 
// this is function based syntax another is object based syntax 