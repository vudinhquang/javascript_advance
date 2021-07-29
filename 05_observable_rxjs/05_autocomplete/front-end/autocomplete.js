function makeURLSearch(str) {
    return "http://localhost:8888/data?search=" + str;
}

function autoComplete() {
    const inputEl = document.querySelector("#js-input-search");

    Observable.fromEvent(inputEl, "input")
        .map(evt => evt.target.value)
        .debounceTime(400)
        .filter((searchStr) => searchStr.length >= 2)
        .map((searchStr) => {
            queryStr = searchStr
            return makeURLSearch(searchStr)
        })
        .map((url) => Observable.fetch(url))
        .forEach(data => {
            console.log("data", data)
        })
}

autoComplete()
