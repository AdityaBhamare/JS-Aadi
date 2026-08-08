// var c = 300
// var should not be used in js because it creates many errors and major problem for debugging
let a = 300

if (true){ 
   let a = 10
   const b = 20
//    console.log("INNER:", a);
}


// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Aditya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "aditya"
    if (username === "aditya") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ************ intersting *************

console.log(addone(5)) // here we access function before declaration.

function addone(num){
    return num + 1
}


addTwo(5) // here we are accessing function before decleartion so it will give us error.
const addTwo = function(num){
    return num + 2
}

