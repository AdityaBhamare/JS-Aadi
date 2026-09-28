# Projects related to DOM

## Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1 ColorSchemeChanger

```javascript
console.log("Aditya")
// selecting all the buttons
const buttons = querySelectorAll('. button') // this gives nodelist

// selecting body using tag name
const body = document.querySelector("body")

// as result is nodelist we can use forEach loop
buttons.forEach(function(button){
  console.log(button) // HTML_SpanELement
  // now applying event listener(method) on every button 
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    if (e.target.id === 'grey'){
      // body.style.backgroundColor = 'grey' -> hard coding the value 
      // for better coding practice use 
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'white'){ 
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'blue'){ 
      body.style.backgroundColor = e.target.id
    }
    if (e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## Project 2 BMICalculator

```javascript
// selecting the form as it has submit button event here is submit type event not a click event 
const form = document.querySelector('form')

// when form get submit it gets submitted by get or post type the values goes to url or server we have to stop them 
// so we have to stop default action of form event listener has a method for it to do so 
form.addEventListener('submit', function(e){
  e.preventDefault();

  // now we want values of height and weight using id 
  const height = parseInt(document.querySelector('#height').value); // string value convert in int 
  const weight = parseInt(document.querySelector('#weight').value);

  // can get some error so we have to check the input values
  const results = document.querySelector('#results');
  
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    // calculate the BMI
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    
    // show results with the correct category
    if (bmi < 18.6) {
      results.innerHTML = `<span>${bmi}</span> - Under Weight`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>${bmi}</span> - Normal Range`;
    } else {
      
      results.innerHTML = `<span>${bmi}</span> - Overweight`;
    }
  }
});

```

## Project 3 DigitalClock

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

// as it is digital clock it should change every second

// let date = new Date()
// console.log(date.toLocaleTimeString)

// so this will give the result in console every time we refresh the page but i want date run everytime and get updated so here we will use a method setInterval it works as give it a method and interval after which to continously run until the program executing

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString)
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 guessthenumber

```javascript
// first of all we have to choose a random number for that we will use math library
let randomNumber = parseInt(Math.random() * 100 + 1);
// random gives a random number in between 0 to 1 (1 excluded) -- [0,1) multiplying it with 100 so that number will be from 0 to 99 but sometimes we can get 0 so for that adding 1 into it and then using parseInt to have an integer value

// submit button id subt
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
// previous guesses using guesses class
const guessSlot = document.querySelector('.guesses');
// how many guesses are remaining
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
// once the user used all the guesses we have to display a msg to startover
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

// array where we will store the previous guesses and display to the user so that user do not guess the same value again
let prevGuess = [];
// how many attempts user did
let numGuess = 1; // as this reach 10 we will disable the submit

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // to check whether the input is number or not
  // or whether the value given not less than 1
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number more than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // check whether the value is equal to random number if yes then use displayMessage correct wrong lesser greater
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO high`);
  }
}

function displayGuess(guess) {
  // or cleanupGuess
  // will clean the values and update the guess array and remaining guess
  userInput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // DOM manipulation
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}
```

## Project 5 keyboard
```javascript
// when we press a key it should be appeared on display

const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
        <div class = 'color'>
        <table>
        <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
        </tr>
        <tr>
        <td>${e.key === " " ? "Space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
        </tr>
        </table>
        </div>
    `;
});
```

## Project 6 unlimitedColors

```javascript
// in this project we will be using the setInterval method
// main focus is to change the color of webpage every sec after clickikng the start
// and to stop there is a stop button

// generate a random color 
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// to generate a random color we will use Math.random

let intervalId
const startChangingColor = function () {
    // good practice
    // if we don't do this when the program will start it will change color after each sec
    // but when we stop it this will not work
    
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
    
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null // we are overiding the value again and again
    // so we should clear it this makes code good and professional 
    
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
```