
/**
 * Yêu cầu: 
 * 1. Lặp từng phần tử của Array theo thời gian không cố định
 * 2. Khi nào gọi hàm next() thì sẽ lặp một lần
 * 3. next() trả về một object có value và done
 *    - value là giá trị mỗi phần tử
 *    - done là giá trị boolean cho biết còn lặp được nữa hay không? 
 */

 function createIterator(arr) {
  // Code here ... ???
  return {
    next: function() {
      // Code here ... ???
    }
  };
}

const listNum = [40, 21, 53];
const iterator = createIterator(listNum);

const data1 = iterator.next(); // { value: 40, done: false }
// .
// .
// .
const data2 = iterator.next(); // { value: 21, done: false }
// .
// .
const data3 = iterator.next(); // { value: 53, done: false }
// .
// .
// .
// .
const data4 = iterator.next(); // { value: undefined, done: true }