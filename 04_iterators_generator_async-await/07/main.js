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


function* handleData() {
  console.log('1. Truoc khi goi API');
  const response = yield fakeGetData('https://quangvu.com/api/1')
  console.log('2. Sau khi goi API');
  console.log('3. Data sau khi goi API', response);
}

const genObj = handleData();
genObj.next()
  .value.then(function(result) {
    genObj.next(result)
  })
