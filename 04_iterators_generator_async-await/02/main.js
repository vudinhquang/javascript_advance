

const arr = [40, 123, 432];

arr[Symbol.iterator] = function() {
  let count = 0;
  return {
    next: function() {
      const value = 'count:' + count;
      const done = count > 10 ? true : false;
      count = count + 1;
      return {
        value: value,
        done: done
      }
    }
  }
}

for(const value of arr) {
  console.log('value', value);
}