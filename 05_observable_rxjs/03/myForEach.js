
Array.prototype.myForEach = function(callbackFn) {
  var originalArr = this

  for(let index = 0; index < originalArr.length; index++) {
    let value = originalArr[index];
    callbackFn(value, index, originalArr);
  }
}

var arr2 = new Array(10, 20, 30)


var returnFromForEach = arr2.forEach(function(value, index, array) {
  console.log('ForEach', value, index, array)
})

var returnFromMyForEach = arr2.myForEach(function(value, index, array) {
  console.log('MyForEach', value, index, array)
})

console.log('returnFromForEach', returnFromForEach)
console.log('returnFromMyForEach', returnFromMyForEach)
