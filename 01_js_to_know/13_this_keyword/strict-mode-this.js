
const btnEl = document.getElementById('test-this')

const john = {
  addEvent() {
    btnEl.addEventListener('click', this.handleClick);
  },
  handleClick() {
    console.log('handleClick', this);
  }
}

john.addEvent();

john.handleClick(); // this = john


const obj = {
  calAge() {
    console.log('this', this);
  }
}

obj.calAge();

var func = obj.calAge

window.func();
