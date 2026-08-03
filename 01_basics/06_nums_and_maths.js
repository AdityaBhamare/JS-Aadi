const score = 400 
// console.log(score);

const balance = new Number(100)
// console.log(balance);

//console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// ***************Maths*********************

// console.log(Math);
// console.log(Math.abs(-4));//The Math.abs() static method returns the absolute value of a number (-ve to +ve).
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)); // ceil means it choose only top value (5).
// console.log(Math.floor(4.9)); // floor only choose lowest value (4). 
// console.log(Math.min(4, 3, 6, 7)); // finds the lowest value.
// console.log(Math.max(4, 8, 9 ,10));// finds the highest value.

console.log(Math.random());// Math.random value is btw 0 to 1 only also it can be 0 or 1.
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)