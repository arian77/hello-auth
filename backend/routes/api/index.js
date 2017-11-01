var express = require("express");
var router = express.Router();

router.get("/", (reg, res, next) => {
  res.send({
    mesage: "Hello API"
  });
});

module.exports = router;
