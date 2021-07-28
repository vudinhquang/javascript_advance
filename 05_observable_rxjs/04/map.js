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

const boxEl = document.querySelector('#box')

window.subscription = Observable.fromEvent(boxEl, 'mousemove')
  .take(10)
  .map(evt => {
    return {
      pageX: evt.pageX,
      pageY: evt.pageY
    }
  })
  .forEach((data) => {
    console.log('data', data)
  })
