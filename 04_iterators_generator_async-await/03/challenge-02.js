
const objJohn = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30
}

//objJohn[Symbol.iterator] = function() {
  // Code here ...
//}

for(const result of objJohn) {
  console.log('result', result);
}