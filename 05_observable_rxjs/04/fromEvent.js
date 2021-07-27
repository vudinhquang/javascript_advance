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
        domEl.removeEventListener(eventName, handlerEvent)
      }
    }
  }
  return new Observable(fromEventWaitToRun)
}

// Click Event
const btnEl = document.querySelector('#button')
const click$ = Observable.fromEvent(btnEl, 'click')
click$.forEach((evt) => {
  console.log('evt = ', evt)
})

// Mousemove Event
const boxEl = document.querySelector('#box')
Observable.fromEvent(boxEl, 'mousemove')
  .forEach((evt) => {
    console.log('evt mousemove', evt)
  })