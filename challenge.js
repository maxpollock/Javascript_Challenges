// Write a function that takes 2 numbers as parameters, and adds them together, and returns (in the console or the page) the result.
// Note: don't use prompts yet, thats the third challenge

// Once you've done that:

// Update your function to take a third parameter, that will change which mathematical operator will be used (+ - * /)

// Once you've done that:

// Update your function so that a user can give each argument's value in a prompt

function challenge(num1, mathSymbol, num2) {
  if (mathSymbol == "+") {
    console.log((num1 = +num2));
  } else if (mathSymbol == "-") {
    console.log((num1 = -num2));
  } else if (mathSymbol == "/") {
    console.log(num1 / num2);
  } else if (mathSymbol == "*") {
    console.log(num1 * num2);
  }
}

let num1 = prompt("Give me a double digit number");
let mathSymbol = prompt("Give me a symbol - either + - * /");
let num2 = prompt("Give me an even double digit number");

challenge(num1, mathSymbol, num2);
