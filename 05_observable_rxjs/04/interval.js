function Observable(forEachWaitToRun) {
  this.forEach = forEachWaitToRun;
}

Observable.interval = function(miliseconds) {
  
  function intervalWaitToRun(onNextFn) {
    console.log('[Observable Interval] Bat dau dang ky nhan du lieu')

    const intervalId = setInterval(() => {
      onNextFn(miliseconds)
    }, miliseconds);

    return {
      unsubscribe: function() {
        console.log('[Observable Interval] Huy dang ky nhan du lieu')
        clearInterval(intervalId)
      }
    }
  }

  const newObs$ = new Observable(intervalWaitToRun)

  return newObs$
}

const subscriptionInterval = Observable.interval(1000)
  .forEach((miliseconds) => {
    console.log('Run After every', miliseconds, 'ms')
  })

// subscriptionInterval.unsubscribe()
