

console.log('1. Hello QuangVu');

setTimeout(() => {
  console.log('3. Hello setTimeout');
}, 0);

fetch('https://api.github.com/users')
  .then(response => {
    console.log('4. Hello response', response);
  })
  .catch(error => {
    console.log('--------. Hello error', error);
  });

console.log('2. Hello Javascript');

// 0.1ms -> Macro
// .... 1ms -> Micro