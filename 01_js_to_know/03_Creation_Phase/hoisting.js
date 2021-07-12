debugger;

console.log('1. age=', age)
var age = 20;
console.log('2. age=', age)

let firstName = 'Quang';
let lastName = 'Vu Dinh';
const yearOfBirth = 1990;

{
    let firstName = 'Quang';
    let lastName = 'Vu Dinh';
    const yearOfBirth = 1990;
}

console.log('3. calAge()', calAge(yearOfBirth)) // No Error

// Function Declaration
function calAge(year) {
  return 2021 - year;
}

console.log('4. calAge()', calAge(yearOfBirth)) // No Error

// console.log('5. getFullName()', getFullName()) // Error
// Function Expression
var getFullName = function() {
  return lastName + ' ' + firstName
}
console.log('6. getFullName()', getFullName())
