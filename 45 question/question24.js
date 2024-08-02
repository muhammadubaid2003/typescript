var car = 'Subaru';
var age = 25;
var city = 'New York';
var isMember = true;
var score = 85;
var fruits = ['apple', 'banana', 'cherry'];
// Tests for equality and inequality with strings
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); // True
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda'); // True
console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda'); // False
console.log("Is car != 'Subaru'? I predict False.");
console.log(car != 'Subaru'); // False
// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True
console.log("Is car.toLowerCase() == 'SUBARU'? I predict False.");
console.log(car.toLowerCase() == 'SUBARU'); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is age == 25? I predict True.");
console.log(age == 25); // True
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True
console.log("Is age < 30? I predict True.");
console.log(age < 30); // True
console.log("Is age >= 25? I predict True.");
console.log(age >= 25); // True
console.log("Is age <= 25? I predict True.");
console.log(age <= 25); // True
console.log("Is age == 30? I predict False.");
console.log(age == 30); // False
console.log("Is age != 25? I predict False.");
console.log(age != 25); // False
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
console.log("Is age < 20? I predict False.");
console.log(age < 20); // False
console.log("Is age >= 30? I predict False.");
console.log(age >= 30); // False
console.log("Is age <= 20? I predict False.");
console.log(age <= 20); // False
// Tests using "and" and "or" operators
console.log("Is age > 20 and score > 80? I predict True.");
console.log(age > 20 && score > 80); // True
console.log("Is age > 30 or score > 80? I predict True.");
console.log(age > 30 || score > 80); // True
console.log("Is age > 30 and score > 80? I predict False.");
console.log(age > 30 && score > 80); // False
console.log("Is age > 30 or score < 80? I predict False.");
console.log(age > 30 || score < 80); // False
// Test whether an item is in an array
console.log("Is 'apple' in fruits? I predict True.");
console.log(fruits.includes('apple')); // True
console.log("Is 'mango' in fruits? I predict False.");
console.log(fruits.includes('mango')); // False
// Test whether an item is not in an array
console.log("Is 'mango' not in fruits? I predict True.");
console.log(!fruits.includes('mango')); // True
console.log("Is 'banana' not in fruits? I predict False.");
console.log(!fruits.includes('banana')); // False
