function sayHello(name = "user") {
  return `Hello ${name}!`;
}

// = "user" is a default value assignment.  Whenever method is called but
// no parameters are passed in, default is used instead

console.log(sayHello("G16"));

// Functions in JS are called by using the name followed by brackets,
// this is known as a c-style calling convention

console.log(sayHello2("G16", "Hiya"));

function sayHello2(name = "user", greeting) {
  return `${greeting} ${name}!`;
}

// Calling a function name before it's been seen is called hoisting

var add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

console.log(add(1, 3));
console.log(typeof add);

// JS has ANONYMOUS functions that allows us to assign the function to a variable

function calcTotal(numbers) {
  total = 0;
  for (number of numbers)
    total += number
  return total;
}

console.log(calcTotal([5, 5, 5]));

var doubleWhammy = function(object, name) {
  for (var key in object){
    if (name === key){
      return true;
    }
  }
  return false;
}


console.log(doubleWhammy({name: "Brendan", age: 26}, "Brendan"));
