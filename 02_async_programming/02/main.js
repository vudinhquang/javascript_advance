console.log('1. Hello 1');

const start = new Date().getTime();

while(true) {
  let end = new Date().getTime();

  if (end - start >= 10000) {
    console.log('end loop');
    break;
  }
}

console.log('2. Hello 2');
