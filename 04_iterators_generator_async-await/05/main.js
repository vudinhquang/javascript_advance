function* generatorFunc() {
  console.log('generatorFunc run 1');
  
  yield 30
  console.log('generatorFunc run 2');

  yield 100
  console.log('generatorFunc run 3');
  
  yield [
    {
      id: 10,
      name: 'John'
    },
    {
      id: 20,
      name: 'Smith'
    }
  ]
  console.log('generatorFunc run 4');

  return 1000000;
}

const genObj = generatorFunc();

const data1 = genObj.next(); // { value: 30, done: false }

console.log('data1', data1);

console.log('.......... 3s .......');

const data2 = genObj.next();

console.log('data2', data2); // { value: 100, done: false }

console.log('....... 5s .........')

const data3 = genObj.next();

console.log('data3', data3); // { value: [], done: false }

const data4 = genObj.next(); // { value: undefined, done: true }

console.log('data4', data4)

console.log(genObj);