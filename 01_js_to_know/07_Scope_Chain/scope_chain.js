var x = 10;

one()
function one() {
  var y = 5;
  two();

  function two() {
    var z = 15;
    three();
  
    function three() {
      var t = x + y + z;
      console.log('1. x + y + z', t); // 10 + 5 + 15
      four();
    }
  }
}

function four() {
  var t = 50;
  console.log('2. x = ', x); // 10
  console.log('3. y = ', y); // Error
  console.log('4. z = ', z); // Error
  console.log('5. t = ', t); // 50
}
// Global: x: 10, one: func, four: func
  // Local one: y: 5, two: func
    // Local two: z: 15, three
      // Local three: t: 10 + 5 + 15

  // Local four: t: 40, x: 10, one: func, four: func