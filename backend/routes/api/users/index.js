var express = require("express");
var router = express.Router();

/* GET users listing. */
const DATA = require("./data.json");

router.get("/", (req, res, next) => {
  res.send(DATA);
});

module.exports = router;
