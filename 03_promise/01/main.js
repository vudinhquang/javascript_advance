


setTimeout(() => {
    console.log('setTimeout 1');
}, 0);

queueMicrotask(() => {
    console.log('queueMicrotask');

    queueMicrotask(() => {
        console.log('queueMicrotask 2');
        queueMicrotask(() => {
            console.log('queueMicrotask 3');
        })
    })
})


console.log('Hello world'); // 0.2ms