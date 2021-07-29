function Observable(forEachWaitToRun) {
  this.forEach = forEachWaitToRun;
}

Observable.timeout = function(miliseconds) {

  function timeoutWaitToRun(onNextFn) {
    console.log('[Observable Timeout] Bat dau dang ky nhan du lieu')

    const timeoutId = setTimeout(() => {
      onNextFn(miliseconds)
    }, miliseconds);

    return {
      unsubscribe: function() {
        console.log('[Observable Timeout] Huy dang ky nhan du lieu')
        clearTimeout(timeoutId)
      }
    }
  }

  const newObs$ = new Observable(timeoutWaitToRun);

  return newObs$
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

Observable.fromEvent = function(domEl, eventName) {
  function fromEventWaitToRun(onNextFn) {
    function handlerEvent(evt) {
      onNextFn(evt)
    }
    
    domEl.addEventListener(eventName, handlerEvent)

    return {
      unsubscribe: function() {
        console.log('[Observable fromEvent] Huy dang ky')
        domEl.removeEventListener(eventName, handlerEvent)
      }
    }
  }
  return new Observable(fromEventWaitToRun)
}

Observable.prototype.take = function(count) {
  const source$ = this

  function newTakeObsWaitToRun(newOnNextFn) {

    let subscription = null;

    if (count > 0) {
      subscription = source$.forEach((data) => {
        count = count - 1
        newOnNextFn(data)
  
        if (count === 0) {
          console.log('[Observable take Huy dang ky]')
          subscription.unsubscribe()
        }
      })
    }

    return {
      unsubscribe() {
        if (subscription !==  null) {
          console.log('[Observable take] Huy dang ky')
          subscription.unsubscribe()
        }
      }
    }

  }

  const newObs$ = new Observable(newTakeObsWaitToRun)
  return newObs$
}

Observable.prototype.map = function(callbackFn) {
  const source$ = this;

  function mapWaitToRun(newOnNextFn) {
    const subscription = source$.forEach((evt) => {
      const newValue = callbackFn(evt)
      newOnNextFn(newValue)
    })

    return {
      unsubscribe: function() {
        console.log('[Observable map] Huy dang ky')
        subscription.unsubscribe()
      }
    }
  }

  const newObs$ = new Observable(mapWaitToRun)

  return newObs$
}

Observable.prototype.filter = function(testFn) {
  const source$ = this;

  function filterWaitToRun(newOnNextFn) {
    const subscription = source$.forEach((data) => {
      if (testFn(data) === true) {
        newOnNextFn(data)
      }
    })

    return {
      unsubscribe: function() {
        console.log('[Observable filter] Huy dang ky')
        subscription.unsubscribe()
      }
    }
  }

  const newObs$ = new Observable(filterWaitToRun)

  return newObs$
}

Observable.prototype.debounceTime = function(miliseconds) {
  const source$ = this

  function debounceTimeWaitToRun(newOnNextFn) {

    let timeoutId = null

    source$.forEach(data => {
      if (timeoutId !== null) {
        clearTimeout(timeoutId)
        timeoutId = null
      }

      timeoutId = setTimeout(() => {
        newOnNextFn(data)
        timeoutId = null
      }, miliseconds);
    })

  }

  return new Observable(debounceTimeWaitToRun)
}

Observable.prototype.buffer = function(closeObs$) {
  const source$ = this;
  
  function bufferWaitToRun(onNewNextFn) {
    let resultsData = []

    const subSource = source$.forEach((dataSource) => {
      resultsData.push(dataSource)
    })

    const subClose = closeObs$.forEach(() => {
      onNewNextFn(resultsData)
      resultsData = []
    })

    return {
      unsubscribe: function() {
        subSource.unsubscribe()
        subClose.unsubscribe()
      }
    }
  }

  return new Observable(bufferWaitToRun)
}
