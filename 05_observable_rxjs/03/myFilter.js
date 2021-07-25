Array.prototype.myFilter = function(testFn) {
  var newArr = []
  var originalArr = this

  for(let index = 0; index < originalArr.length; index++) {
    let value = originalArr[index];
    if(testFn(value) === true) {
      newArr.push(value)
    }
  }

  return newArr;
}

var arr = new Array(10, 20, 30)

var arrAfterFilter = arr.filter(value => value > 10);
var arrAfterMyFilter = arr.myFilter(value => value > 10);

console.log('arrAfterFilter', arrAfterFilter) // [20, 30]
console.log('arrAfterMyFilter', arrAfterMyFilter) // [20, 30]

// var arrAfterFilter = arr.filter(function(value) {
//   // if (value > 10) {
//   //   return true
//   // }
//   // return false
//   return value > 10
// });

// var arrAfterMyFilter = arr.myFilter(function(value) {
//   // if (value > 10) {
//   //   return true
//   // }
//   // return false
//   return value > 10
// })
