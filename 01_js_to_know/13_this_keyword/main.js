/**
 * Function.bind(obj)
 * - Nhận vào một object bất kỳ
 * - Return về một Function mới luôn có this = obj
 */

/**
 * Function.call, Function.apply
 * - Nhận vào một object bất kỳ trong tham số đầu tiên
 * - Function này sẽ được gọi ngay lập tức
 * - Return về kết quả của lời gọi hàm
 */
var john = {
  year: 1990,
  sum: function (x, y) {
    console.log(x, y);
    console.log('sum', this);
    console.log('----------------');
    return x + y;
  }
}
var func = john.sum;
func(10, 20);
const value1 = john.sum(10, 20);
console.log('value1', value1); // 30
