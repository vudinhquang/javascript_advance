function Observable(forEachWaitToRun) {
  this.forEach = forEachWaitToRun;
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

var btnEl = document.querySelector('#button')

function doubleClick(domEl, cb) {
  const click$ = Observable.fromEvent(domEl, 'click')
  const clickWithDebounceTime$ = click$.debounceTime(300);
  click$
    .buffer(
      clickWithDebounceTime$
    )
    .filter(data => data.length === 2)
    .forEach(cb)
}


doubleClick(btnEl, (evt) => {
  console.log('double click', evt)
})
