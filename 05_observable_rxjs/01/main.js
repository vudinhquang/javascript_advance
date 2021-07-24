const boxEl = document.querySelector('.box')

function next(evt) {
  console.log('evt', evt);
}

boxEl.addEventListener('mousemove', next)
