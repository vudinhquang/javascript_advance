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
