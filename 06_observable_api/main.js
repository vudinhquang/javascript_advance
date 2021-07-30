const obserber = {
  next: (data) => console.log('next run', data),
  error: (error) => console.log('error run', error),
  complete: () => console.log('complete run')
}
Observable.timeout(1000)
  .subscribe(obserber)
