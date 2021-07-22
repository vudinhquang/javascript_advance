const objJohn = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30
}

objJohn[Symbol.iterator] = function() {}

// -----------------------------------------

const obj = {}
obj.name = 30

obj['name'] = 50;

const key = 'name';
obj[key] = 60;


// -----------------------------------------


function myFetch() {
  const keyState = Symbol('state');
  const keyResult = Symbol('result');
  const promiseObj = {};

  promiseObj[keyState] = 50;
  promiseObj[keyResult] = 100;

  return promiseObj
}

var data = myFetch();
console.log(data);
