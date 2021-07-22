
const objJohn = {
  firstName: 'John',
  lastName: 'Smith',
  age: 30,
  age2: 50,
  age3: 60
}

objJohn[Symbol.iterator] = function() {

  let index = -1;
  let thisJohn = this;
  let listKeys = Object.keys(thisJohn); // ['firstName', 'lastName', 'age'];

  return {
    next: function() {
      index = index + 1;
      const key = listKeys[index]; // undefined
      const value = {
        key,
        data: thisJohn[key]
      }; // undefined
      const done = index > listKeys.length - 1 ? true : false;
      return {
        value,
        done
      }
    }
  }
}

for(const result of objJohn) {
  console.log('result', result);
}