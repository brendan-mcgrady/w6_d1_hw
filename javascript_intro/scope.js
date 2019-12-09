var name = 'Brendan';

var secretsFunction = function(){
  var pinCode = [0, 0, 0, 0];
  console.log('name INSIDE secretsFunction:', name);
}

secretsFunction();
console.log('name OUTSIDE secretsFunction', name);

// This returns a reference error (when pinCode replaces name) because pinCode is a variable only accessible
// within the function.  If replace pinCode with name, because the variable
// name is declared outside of the function, it is accessible both
// within the scope of the function and otherwise

var filterNamesByFirstLetter = function(names, letter){
  var filteredNames = [];
  for (let name of names){
    if(name[0] === letter){
      filteredNames.push(name);
    }
  }
  console.log('name after loop:', name);
  return filteredNames;
}

// Let is used instead of var where you only want a variable to have an assignerd value
// within a single block of code

var students = ['Alice', 'Bob', 'Artem', 'Babs'];
var filteredStudents = filterNamesByFirstLetter(students, 'A');

console.log(filteredStudents);

let isItFive = function (number){
  let result;
  if(number === 5){
    result = true;
  } else {
    result =  false;
    }
    return result;
  }
}
