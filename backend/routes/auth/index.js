var express = require("express");
var router = express.Router();
const controller = require("./controller");

router.get("/", (req, res, nest) => {
  res.send({
    mesage: "Hello Auth"
  });
});

router.post("/", (req, res, next) => {
  console.log(reg.headers);
  console.log(reg.body);

  res.send({
    headers: req.headers,
    body: req.body
  });
});

router.post("/login", controller.checkBody, (req, res) => {
  res.send({
    username: req.body.username,
    message: req.message
  });
});

router.get("/check", controller.checkToken, (req, res) => {
  res.send({
    token: req.headers.authorization,
    message: req.message
  });
});

module.exports = router;
