function makeURLSearch(str) {
    return "http://localhost:8888/data?search=" + str;
}

function autoComplete() {
    const inputEl = document.querySelector("#js-input-search");
    const resultsEl = document.querySelector("#js-results");

    Observable.fromEvent(inputEl, "input")
        .map(evt => evt.target.value)
        .debounceTime(400)
        .filter((searchStr) => searchStr.length >= 2)
        .map((searchStr) => {
            queryStr = searchStr
            return makeURLSearch(searchStr)
        })
        .map((url) => Observable.fetch(url))
        .forEach((fetchObs$) => {
            fetchObs$
                .map(arrResponse => {
                    return arrResponse.map(item => `<div class="list-group-item">${item.label}</div>`)
                })
                .map(arrHTML => arrHTML.join(''))
                .forEach(strHTML => {
                    resultsEl.innerHTML = strHTML;
                });
        });
}

autoComplete()
