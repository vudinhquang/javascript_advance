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

console.log("genObj", genObj);
