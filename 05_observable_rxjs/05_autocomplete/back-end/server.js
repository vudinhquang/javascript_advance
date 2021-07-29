const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require('cors')

const data = require("./fakeData.js");

app.use(cors())
app.use(bodyParser.json());

let count = 0;
let randomMiliseconds = 1000;
app.get("/data", (req, res) => {
  let limit;
  let offset;
  let searchStr = req.query.search || '';

  const dataSearch = data.filter(item => {
    return item.label.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1
  })

  if (req.query.limit) {
    limit = req.query.limit;
  } else {
    limit = 20;
  }

  if (req.query.offset) {
    offset = req.query.offset;
  } else {
    offset = 0;
  }

  // count++;
  
  // // if (count === 1) {
  // //   randomMiliseconds = 5000
  // // } else if (count === 2) {
  // //   randomMiliseconds = 1000
  // // }

  const randomMiliseconds = Math.floor(Math.random() * 1000) + 500;
  setTimeout(() => {
    res.send(dataSearch.slice(Number(offset), Number(limit) + Number(offset)));
  }, randomMiliseconds);
});

app.listen(8888, () => {
  console.log("Server is running. Access to http://localhost:8888 :)");
});
