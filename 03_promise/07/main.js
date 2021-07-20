/*
fetch('https://api.github.com/users/1')
  .then(res1 => {
    console.log('res1', res1);
    return fetch('https://api.github.com/users/2');
  })
  .then(res2 => {
    console.log('res2', res2);
    return fetch('https://api.github.com/users/3');
  })
  .then(res3 => {
    console.log('res3', res3);
    return 20;
  })
  .catch(err => {
    console.log('err', err);
  });
*/

Promise.all([
  fetch('https://api.github.com/users/1'),
  fetch('https://api.github.com/users/2'),
  fetch('https://api.github.com/users/3')
]).then(results => {
  console.log('results', results);
})
