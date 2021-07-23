
function* calSum() {

  const a = yield;
  const b = yield;

  return a + b;
}

const genObj = calSum();

const data1 = genObj.next();    // { value: undefined, done: false }
const data2 = genObj.next(20);  // { value: undefined, done: false }
const data3 = genObj.next(50);  // { value: 70, done: true }

console.log(data1);
console.log(data2);
console.log(data3);

console.log(genObj);