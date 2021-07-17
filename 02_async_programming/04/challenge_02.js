function fakeGetData(url, callbackFn) {
	var fakeResponses = {
		"https://quangvu.com/api/1": "Data1",
		"https://quangvu.com/api/2": "Data2",
		"https://quangvu.com/api/3": "Data3"
	};
	var randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

	console.log(`Đang gọi API với URL : ${url} - Thời gian ${randomMiliseconds}ms`);

	setTimeout(function(){
		callbackFn(fakeResponses[url]);
	}, randomMiliseconds);
}

/**
 * Yêu cầu Challenge 02:
 *  1. Các lời gọi API sẽ có thời gian chạy khác nhau và ngẫu nhiên.
 *  2. Cả 3 lời gọi API phải được chạy đồng thời cùng một lúc.
 *  3. Chỉ áp dụng các kiến thức cơ bản của Javascript (Không dùng Promise)
 *  4. API nào chạy xong phải in kết quả ra ngay (Nhưng phải đảm bảo đúng thứ tự 1->2->3)
 */

// API1  API2  API3
//  1s    2s    3s
//  1s    3s    2s
//  2s    1s    3s
//  2s    3s    1s
//  3s    1s    2s
