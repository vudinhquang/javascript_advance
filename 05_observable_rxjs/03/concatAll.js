
Array.prototype.concatAll = function() {
  // TODO ...
  var newArr = []
  var originalArr = this

  for(let index = 0; index < originalArr.length; index++) {
    let valueOrArray = originalArr[index];

    if (Array.isArray(valueOrArray) === true) {
      valueOrArray.forEach((value) => {
          newArr.push(value)
      })
    } else {
      newArr.push(valueOrArray)
    }
  }

  return newArr
}

var arr2 = [
  [10, 20, 30],
  [50]
].concatAll(); // [10, 20, 30, 50]
console.log('arr2', arr2)

var arr3 = [
  1111,
  [10, 20, 30],
  [50],
  [60, [70]]
].concatAll(); // [1111, 10, 20, 30, 50, 60, [70]]
console.log('arr3', arr3)
