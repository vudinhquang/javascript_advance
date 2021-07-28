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

var btnEl = document.querySelector('#button')

Observable.fromEvent(btnEl, 'click')
  .debounceTime(300)
  .forEach((evt) => {
    console.log('evt', evt)
  })

Observable
  .fromEvent(document.querySelector('#autocomplete'), 'keypress')
  .debounceTime(400)
  .map(evt => {
    return evt.target.value
  })
  .forEach((str) => {
    console.log('Gọi API len server', str)
  })
