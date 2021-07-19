// debugger;
function fakeGetData(url, callbackFn) {
	var fakeResponses = {
		"https://quangvu.com/api/1": "Data1",
		"https://quangvu.com/api/2": "Data2",
		"https://quangvu.com/api/3": "Data3"
	};
	var randomMiliseconds = Math.floor(Math.random() * 5000) + 1000;

	console.log(`Đang gọi API với URL : ${url} - Thời gian ${randomMiliseconds}ms`);

	setTimeout(function(){
		callbackFn(null, fakeResponses[url]);
		// callbackFn(new Error('Failed'), null);
	}, randomMiliseconds);
}

function myFetch(url) {
  let res = null;
  let err = null;
  let callbackSuccess = null;
  let callbackError = null;

  fakeGetData(url, function(error, data) {
    if (callbackSuccess !== null || callbackError !== null) {
      if (error) callbackError(error);
      else callbackSuccess(data);
    } else {
      res = data;
      err = error;
    }
  })

  return {
    then: function(successFn, errorFn) {
      if (res !== null || err !== null) {
        if (err !== null) errorFn(err);
        else successFn(res);
      } else {
        callbackSuccess = successFn;
        callbackError = errorFn;
      }
    }
  }
}

let fakePromise = myFetch('https://quangvu.com/api/1');

console.log('fakePromise', fakePromise.then);

fakePromise.then(
  function(response) {
    console.log('response', response);
  },
  function(err) {
    console.log('error', err);
  }
)