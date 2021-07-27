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

const btnEl = document.querySelector('#button')
Observable.fromEvent(btnEl, 'click')
  .take(3)
  .forEach((evt) => {
    console.log('evt click', evt)
  })
