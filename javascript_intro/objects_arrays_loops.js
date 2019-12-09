var sports = ["football", "tennis", "rugby"];

console.log(sports.length);

// Any time you call something including (), JS expects a method
// length is an in-built property of the sports object of type array

var firstSport = sports[0];
console.log("first sport in the array is: ", firstSport);

sports.push("tennis");
sports.push("snooker");
sports.push(5);
console.log(sports);

// Adds elements to the end of the array

sports.pop();
sports.shift();
sports.unshift("basketball");
console.log(sports);

// Pop removes the last element from the array, shift removes the first
// Unshift adds elements to the beginning of the array

var removedSports = sports.splice(3, 1);
console.log(removedSports);

// First number in splice is the index value, second is how many elements
// in array from the designated index are affected.  Above removes index 3.
// If it was 2 instead, it would remove index 3 and 4

sports.splice(3, 1, "swimming");
console.log(sports);

// Works the same as the above, although replaces the specified index
// with value rather than simply removing it - can be different type

for (var currentSport of sports) {
  console.log(currentSport.toUpperCase());
}

// This is called a short form loop

for (var i = 0; i < sports.length; i ++){
  console.log(sports[i].toUpperCase());
}

// This is a long form loop.  First is the count initialiser; comparison; increment
// Count initialiser sets up a new variable to use to iterate through the array
// Comparison checks the iterator index as we go through the array
// Increment is how much we want to increment each iteration

var movie = {
  title: "It's A Wonderful Life",
  year: 1946,
  language: "Spanish"
};

console.log("movie:", movie);
console.log(movie.title);

// This is a JS object.  We can access values of the keys by using a .

movie.cast = ["James Stewart", "Donna Reed"];
movie.language = "English";
delete movie.year;
console.log(movie);

// We can add/ delete properties to objects by 'accessing' it as though the property
// already exists.  This also replaces a property if already exists

movie.ratings = {
  critic: 94,
  audience: 95
}
console.log(movie.ratings.audience);

// We can create objects within objects.  Accessed by using . multiple times

for (var key in movie) {
  var value = movie[key];
  console.log(`The ${key} is ${value}.`);
}

// Loops through the object and returns both the key and their respective values

console.log(Object.keys(movie));

// Returns the keys of an object
