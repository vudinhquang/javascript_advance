Array.prototype.take = function(count) {
  // Check count isNumber??
  var newArr = []
  var originalArr = this

  for(let index = 0; index < originalArr.length; index++) {
    if (index >= count) {
      return newArr
    }

    let value = originalArr[index]
    newArr.push(value)
  }

  return newArr
}

var arr = new Array(10, 20, 30, 40, 50)


// [10, 20, 30, 40, 50] -> [10, 20, 30]
// [10, 20]             -> [10, 20]
var get3Elements = arr.take(3); 

console.log('get3Elements', get3Elements)
