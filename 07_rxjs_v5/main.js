const Observable = window.Rx.Observable


const boxEl = document.querySelector('#box')
// function: next, err, complete
/*
Observable
  .fromEvent(boxEl, 'mousemove')
  .map(evt => {
    return {
      offsetX: evt.offsetX,
      offsetY: evt.offsetY
    }
  })
  .filter(evt => evt.offsetX >= 150)
  .take(10)
  .subscribe(
    (evt) => {
      console.log('evt', evt)
    },
    null,
    () => {
      console.log('complete')
    }
  )
*/
// object {next, err, complete}
/*
Observable
  .fromEvent(boxEl, 'mousemove')
  .map(evt => {
    return {
      offsetX: evt.offsetX,
      offsetY: evt.offsetY
    }
  })
  .filter(evt => evt.offsetX >= 150)
  .take(10)
  .subscribe({
      next: (evt) => {
        console.log('evt', evt)
      },
      complete: () => {
        console.log('complete')
      }
    }
  )
*/

// interval
/*
let count = 0;
Observable
  .interval(1000)
  .take(5)
  .subscribe({
    next: () => {
      count++
      console.log('run ', count)
    }
  })
*/

// ConcatAll
let count = 0;
Observable
  .interval(1000)
  .take(5)
  .map(() => {
    return Observable
      .interval(500)
      .take(5)
  })
  .concatAll()
  .subscribe({
    next: () => {
      count++
      console.log('run ', count)
    }
  })
