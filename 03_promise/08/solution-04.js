
function fakeGetData(url) {
	var fakeResponses = {
		"https://quangvu.com/api/1": "Data1",
		"https://quangvu.com/api/2": "Data2",
		"https://quangvu.com/api/3": "Data3"
	};
	var randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

	console.log(`Đang gọi API với URL : ${url} - Thời gian ${randomMiliseconds}ms`);

	return new Promise((successFn, errorFn) => {
    setTimeout(function(){
      successFn(fakeResponses[url]);
    }, randomMiliseconds);
  })
}

/**
 * Yêu cầu Challenge 04 - Promise:
 *  1. Các lời gọi API sẽ có thời gian chạy khác nhau và ngẫu nhiên.
 *  2. Cả 3 lời gọi API phải được chạy đồng thời cùng một lúc.
 *  3. Chỉ áp dụng các kiến thức liên quan tới Promise.
 *  4. API nào chạy xong phải in kết quả ra ngay (Nhưng phải đảm bảo đúng thứ tự 1->2->3)
 */

const ps1 = fakeGetData('https://quangvu.com/api/1');
const ps2 = fakeGetData('https://quangvu.com/api/2');
const ps3 = fakeGetData('https://quangvu.com/api/3');

ps1
	.then(data1 => {
		console.log(data1);
		return ps2;
	})
	.then(data2 => {
		console.log(data2);
		return ps3;
	})
	.then(data3 => {
		console.log(data3);
	})