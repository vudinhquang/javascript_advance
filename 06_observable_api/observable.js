window.Observable = (function(){
    const SymbolSubscribe = Symbol('Subscribe')

    class Observable {
        constructor(_subscribe) {
            this[SymbolSubscribe] = _subscribe
        }
    
        subscribe(next, error, complete) {
            let observer = null
        
            if (typeof next === 'function') {
                observer = {
                    next: next,
                    error: error || function() {},
                    complete: complete || function() {}
                }
            } else {
                observer = next
        
                if (!observer.error) {
                    observer.error = function() {}
                }
                if (!observer.complete) {
                    observer.complete = function() {}
                }
            }
        
            return this[SymbolSubscribe](observer)
        }
    
        static timeout(miliseconds) {
      
            function _subscribe(observer) {
    
                const timeoutId = setTimeout(() => {
                    observer.next()
                    observer.complete()
                }, miliseconds);
            
                return {
                    unsubscribe() {
                        clearTimeout(timeoutId)
                    }
                }
            }
        
            return new Observable(_subscribe)
        }
    
        static interval(miliseconds) {
      
            function _subscribe(observer) {
    
                const intervalId = setInterval(() => {
                    observer.next()
                }, miliseconds);
            
                return {
                    unsubscribe() {
                        clearInterval(intervalId)
                    }
                }
            }
        
            return new Observable(_subscribe)
        }

        static fromEvent(element, eventName) {
            const _subscribe = (observer) => {
                function handler(evt) {
                    observer.next(evt)
                }
                element.addEventListener(eventName, handler)
      
                return {
                    unsubscribe() {
                        element.removeEventListener(eventName, handler)
                    }
              }
            }
            return new Observable(_subscribe)
        }

        take(number) {
            if (number < 0) {
                throw new Error('ArgumentOutOfRange')
            }
      
            const source$ = this
            const _subscribe = (observer) => {
                let counter = 0
                let subscription = null
      
                if (number === 0) {
                    observer.complete()
                } else {
                    subscription = source$.subscribe({
                        next: (data) => {
                            observer.next(data)
                            counter++
            
                            if (counter === number) {
                                observer.complete()
                                subscription.unsubscribe()
                            }
                        },
                        error: (err) => {
                            observer.error(err)
                        },
                        complete: () => {
                            observer.complete()
                        }
                    })
                }
      
                return {
                    unsubscribe() {
                        if (subscription) {
                            subscription.unsubscribe()
                        }
                    }
                }
            }
          
            return new Observable(_subscribe)
        }

        map(callback) {
            const source$ = this
            const _subscribe = (observer) => {
                const subscription = source$.subscribe({
                    next: (data) => {
                        const newData = callback(data)
                        observer.next(newData)
                    },
                    error: (err) => {
                        observer.error(err)
                    },
                    complete: () => {
                        observer.complete()
                    }
                })
      
                return {
                    unsubscribe() {
                        subscription.unsubscribe()
                    }
                }
            }

            return new Observable(_subscribe)
        }

        filter(testFn) {
            const source$ = this
            const _subscribe = (observer) => {
                const subscription = source$.subscribe({
                    next: (data) => {
                        if (testFn(data)) {
                            observer.next(data)
                        }
                    },
                    error: (err) => {
                        observer.error(err)
                    },
                    complete: () => {
                        observer.complete()
                    }
                })
      
                return {
                    unsubscribe() {
                        subscription.unsubscribe()
                    }
                }
            }

            return new Observable(_subscribe)
        }
    }
    
    return Observable
})()
