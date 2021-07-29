
var searchStr = 'nur'
var url = 'http://localhost:8888/data?search=' + searchStr

Observable.fetch(url)
    .forEach(data => {
        console.log(data);
    })
