var express = require("express");
var router = express.Router();

router.get("/", (reg, res, nest) => {
  res.send({
    mesage: "Hello roots"
  });
});

module.exports = router;
