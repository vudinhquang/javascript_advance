
var searchStr = 'nur'

fetch("http://localhost:8888/data?search=" + searchStr)
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
