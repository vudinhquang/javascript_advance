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
