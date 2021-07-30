class Observable {
    constructor(subscribe) {
        this.subscribe = subscribe
    }

    static timeout(miliseconds) {
  
        function subscribe(observer) {
            const timeoutId = setTimeout(() => {
                observer.next(miliseconds)
                observer.complete()
            }, miliseconds);
        
            return {
                unsubscribe() {
                    clearTimeout(timeoutId)
                }
            }
        }
    
        return new Observable(subscribe)
    }
}
