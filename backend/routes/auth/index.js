var express = require("express");
var router = express.Router();

router.get("/", (reg, res, nest) => {
  res.send({
    mesage: "Hello Auth"
  });
});

router.post("/", (reg, res, next) => {
  console.log(reg.headers);
  console.log(reg.body);

  res.send({
    headers: reg.headers,
    body: reg.body
  });
});

module.exports = router;
