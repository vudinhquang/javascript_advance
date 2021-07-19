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

function startRunAPI(url) {
  let res = null;
  let callback = null;

  fakeGetData(url, function(data) {
    if (callback !== null) {
      callback(data);
    } else {
      res = data;
    }
  })

  return function getData(cbFn) {
    if (res !== null) {
      cbFn(res);
    } else {
      callback = cbFn;
    }
  }
}

let fnGetData1 = startRunAPI('https://quangvu.com/api/1');