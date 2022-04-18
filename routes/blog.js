const express = require("express");
const router = express.Router();
const { getBlogList, getBlogById } = require("../service/blog");
const { returnContorller } = require("../utils/index");

router.get("/list", function (req, res, next) {
  getBlogList().then(
    (data) => {
      returnContorller(res, 200, data, "ok");
    },
    (err) => {
      returnContorller(res, 500, err, "服务器内部错误");
    }
  );
});

router.get("/content", function (req, res, next) {
  // console.log(req)
  getBlogById(req.query.id).then(
    (data) => {
      returnContorller(res, 200, data, "ok");
    },
    (err) => {
      returnContorller(res, 500, err, "服务器内部错误");
    }
  );
});

module.exports = router;
