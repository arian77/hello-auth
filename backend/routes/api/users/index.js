var express = require("express");
var router = express.Router();

/* GET users listing. */
const DATA = require("./data.json");

router.get("/", (reg, res, nest) => {
  res.send(DATA);
});

module.exports = router;
