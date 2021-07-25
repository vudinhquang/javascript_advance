/** Timeout wrapped into Promise API */
function timeout(time) {
  return new Promise(function(successFn) {
    function next() {
      successFn()
    }
    setTimeout(next, time);
  })
}

timeout(1000)
  .then(() => {
    console.log('Log after 1000ms')
  })

/** setInterval thì sao? */
function interval(time) {
  return new Promise(function(successFn) {
    setInterval(() => {
      successFn()
    }, time);
  })
}

interval(1000)
  .then(() => {
    console.log('Log every after 1000ms')
  })