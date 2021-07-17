function fakeGetData(url, callbackFn) {
	var fakeResponses = {
		"https://zendvn.com/api/1": "Data1",
		"https://zendvn.com/api/2": "Data2",
		"https://zendvn.com/api/3": "Data3"
	};
	var randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

	console.log(`Đang gọi API với URL : ${url} - Thời gian ${randomMiliseconds}ms`);

	setTimeout(function(){
		callbackFn(fakeResponses[url]);
	}, randomMiliseconds);
}

/**
 * Yêu cầu Challenge 01:
 *  1. Các lời gọi API sẽ có thời gian chạy khác nhau và ngâu nhiên
 *  2. Kết quả phải được hiển thị ra cho người dùng theo đúng thứ tự 1 -> 2 -> 3
 */
fakeGetData('https://zendvn.com/api/1', function(res1) {
  fakeGetData('https://zendvn.com/api/2', function(res2) {
    fakeGetData('https://zendvn.com/api/3', function(res3) {
      console.log(res1);
      console.log(res2);
      console.log(res3);
    })
  })
})
