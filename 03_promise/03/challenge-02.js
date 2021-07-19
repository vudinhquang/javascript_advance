
console.log('1. Hello QuangVu'); // 0ms

// 0ms
setTimeout(() => {
  console.log('5. Hello setTimeout');
}, 0);

// 1000ms
fetch('https://api.github.com/users')
  .then(response => {
    console.log('4. Hello response', response);
  })
  .catch(error => {
    console.log('?. Hello error', error);
  });

block5Seconds();
function block5Seconds() {
  const start = new Date().getTime();
  while (true) {
    const end = new Date().getTime();

    if (end - start >= 2000) {
      break;
    }
  }
  console.log('2. block5Seconds done');
}

console.log('3. Hello Javascript');



// Web APIs
// 0.1ms: Callback Timeout
// 0.2ms: Callback Fetch ... ... ... 1000ms

// .
// .
// .
// .
// .


// Queue


// 1. Macro Queue

// 2. Micro Queue