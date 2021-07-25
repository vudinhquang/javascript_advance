Array.prototype.myMap = function(callbackFn) {
  var newArr = []
  var originalArr = this

  for(let index = 0; index < originalArr.length; index++) {
    let value = originalArr[index];
    let newValue = callbackFn(value, index, originalArr);

    newArr.push(newValue)
  }

  return newArr
}

var arr2 = new Array(10, 20, 30)

var arr2AfterMap = arr2.map(function(value, index, array) {
  return value * 100
})

var arr2AfterMyMap = arr2.myMap(function(value, index, array) {
  return value * 100
  // return 15000
})

console.log('arr2AfterMap', arr2AfterMap)
console.log('arr2AfterMyMap', arr2AfterMyMap)
