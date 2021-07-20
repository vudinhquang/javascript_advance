
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


fakeGetData('https://quangvu.com/api/1')
  .then(res => {
    console.log('res', res);
  })
  .catch(err => {
    console.log('err', err);
  })