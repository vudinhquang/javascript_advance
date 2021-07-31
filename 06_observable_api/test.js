/**
 * Test timeout, interval
 */
// Cách 1
const obserber = {
    next: (data) => console.log('1. next run', data),
    error: (error) => console.log('1. error run', error),
    complete: () => console.log('1. complete run')
  }
  Observable.timeout(1000)
    .subscribe(obserber)
  
  // Cách 2
  Observable.timeout(2000)
    .subscribe(
      (data) => console.log('2. next run', data),
      null,
      () => console.log('2. complete run')
    )
  
  Observable.timeout(2000)
  .subscribe(
    (data) => console.log('3. next run', data)
  )
  
  var sub1 = Observable.interval(1000)
    .subscribe({
      next: (data) => console.log('1. interval next run', data)
    })
  var sub2 = Observable.interval(1000)
    .subscribe(
      data => console.log('2. interval next run', data)
    )
  
/**
* Test operator: TAKE
*/
const subTake = Observable
  .interval(1000)
  .take(100)
  .subscribe({
    next: (data) => console.log('[1. take] next:', data),
    error: (err) => console.log('[1. take] err:', error),
    complete: () => console.log('[1. take] complete: ')
  })

/**
 * Test operator: MAP
 */
const subMap = Observable
  .fromEvent(document.getElementById('box'), 'mousemove')
  .take(10)
  .map(evt => ({
    pageX: evt.pageX,
    pageY: evt.pageY
  }))
  .subscribe({
    next: (data) => console.log('[2. map] next:', data),
    error: (err) => console.log('[2. map] err:', error),
    complete: () => console.log('[2. map] complete: ')
  })

/**
 * Test operator: FILTER
 */
const subFilter = Observable
  .fromEvent(document.getElementById('box'), 'mousemove')
  .map(evt => ({
    offsetX: evt.offsetX,
    offsetY: evt.offsetY
  }))
  .filter(evt => evt.offsetX >= 150)
  .subscribe({
    next: (data) => console.log('[3. filter] next:', data),
    error: (err) => console.log('[3. filter] err:', error),
    complete: () => console.log('[3. filter] complete: ')
  })
