var name = "Brendan";
console.log("Muh name is", name);

var greeting = "Hello";
greeting = 5;
console.log(greeting);

/*
Types:
number, string, null, undefined, boolean and symbol
*/

var name2 = "Donald";
var thirdName = " Duck";
var message = `Hello, ${name2} ${thirdName}.`;

console.log(message);

// Must use backticks for string interpolation

var myVariable;
console.log(myVariable);
console.log(typeof myVariable);
// console.log(someOtherVariable);

// Undefined is a type of variable that is defined but has no value
// myVariable will print undefined, whereas someOtherVariable will print a reference error 'not defined'

if (1 > 0) {
  var conMessage = "1 is greater than 0.";
} else if (1 == 0) {
  var conMessage = "1 equal to 0.";
} else {
  var conMessage = "1 is not greater than 0.";
}

// If the first piece of code is satisfied, the rest of the code is not executed.

if (null){
  var result = "The expression evaluates to true.";
} else {
  var result = "The expression evaluates to false.";
}

console.log(result);

/* Truthiness of types:

> Boolean("string");
true
> Boolean("");
false
> Boolean(0);
false
> Boolean(1);
true
> Boolean(undefined);
false
> Boolean(NaN);
false

2 == 2 = true
2 == "2" = true
2 === "2" = false
2 != 2 = false
2 != "2" = false
2 !== "2" = true

Triple equals checks both the type and the value are the same

&& = and
|| = or */
